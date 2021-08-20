import NotFound from "components/NotFound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddEditPage from "./pages/AddEditPage";
import MainPage from "./pages/MainPage";

const PhotoPage = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route exact path={`${match.url}/add`} component={AddEditPage} />
      <Route exact path={`${match.url}/:photoID`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default PhotoPage;
