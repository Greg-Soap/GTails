import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCG9kceYOFlQXGb4UQ0Cq5gEJ-GYOjVSOU",
  authDomain: "gtails-1e9e8.firebaseapp.com",
  projectId: "gtails-1e9e8",
  storageBucket: "gtails-1e9e8.appspot.com",
  messagingSenderId: "1026845023721",
  appId: "1:1026845023721:web:13fa49e0a42971fdabff78",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
