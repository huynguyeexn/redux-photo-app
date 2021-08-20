import productApi from "api/productApi";
import Login from "features/Auth/pages/login";
import firebase from "firebase";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import PhotoPage from "./features/Photo";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

function App() {
  const [productList, setProductList] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState({}); // Local signed-in state.

  const fetchProductList = async () => {
    try {
      const params = {
        _page: 11,
        _limit: 10,
      };

      const response = await productApi.getAll(params);

      setProductList(response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  // Fetch API
  useEffect(() => {
    fetchProductList();
  }, []);

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const handleButtonClick = () => {
    fetchProductList();
  };

  return (
    <div className="App">
      <Suspense fallback={<div>...Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Button onClick={handleButtonClick}>Featch product list</Button>

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={PhotoPage} />
            <Route exact path="/login" component={Login} />

            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
