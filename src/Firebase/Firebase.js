import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_NOT_SECRET_CODE,
//   authDomain: process.env.REACT_APP_NOT_SECRET_CODE2,
//   projectId: process.env.REACT_APP_NOT_SECRET_CODE3,
//   storageBucket: process.env.REACT_APP_NOT_SECRET_CODE4,
//   messagingSenderId: process.env.REACT_APP_NOT_SECRET_CODE5,
//   appId: process.env.REACT_APP_NOT_SECRET_CODE6,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDRy6d_wdd5QfFZbB3cfzyDqdEFROFSXWM",
  authDomain: "productpal-online-store-02.firebaseapp.com",
  projectId: "productpal-online-store-02",
  storageBucket: "productpal-online-store-02.appspot.com",
  messagingSenderId: "698905553316",
  appId: "1:698905553316:web:70b0349eec8a2e56f47931",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
