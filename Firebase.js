
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMsFamoiwNBUPvZeWPoRzCJjluGeAXupE",
  authDomain: "maya-cooking-oil.firebaseapp.com",
  projectId: "maya-cooking-oil",
  storageBucket: "maya-cooking-oil.appspot.com",
  messagingSenderId: "349389156591",
  appId: "1:349389156591:web:d413e7c27f2ff3570c2b1a",
  measurementId: "G-T5EDJ7DSNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);