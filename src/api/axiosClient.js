import axios from "axios";
import queryString from "query-string";
import firebase from "firebase";

const getFirebaseToken = async () => {
  // If user has login
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  // If user has login but not fetch
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(null);
      console.log("Timeout");
    }, 5000);

    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          reject(null);
        }

        const token = await user.getIdToken();
        console.log("[AXIOS] Logged in user token: ", token);

        resolve(token);
        clearTimeout(timeout);
      });
    return () => unregisterAuthObserver();
  });
};
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  //Get token
  const token = await getFirebaseToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle Error
    throw error;
  }
);

export default axiosClient;
