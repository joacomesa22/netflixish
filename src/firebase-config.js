import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_yUAA--BkXWFWd423L-VXZkpe0MDdCwc",
  authDomain: "netflixish-1c24c.firebaseapp.com",
  projectId: "netflixish-1c24c",
  storageBucket: "netflixish-1c24c.appspot.com",
  messagingSenderId: "692730103805",
  appId: "1:692730103805:web:ba7000851e0fd932edbb94",
  measurementId: "G-06QRZFKQF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
