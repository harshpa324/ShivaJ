
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "process.env.FBAPI",
  authDomain: "process.env.AUTH_DOMAIN",
  projectId: "process.env.PROJECT_ID",
  storageBucket: "process.env.STORAGE_BUCKET",
  messagingSenderId: "process.env.MESSAGING_SENDER_ID",
  appId: "process.env.APP_ID",
  measurementId: "process.env.MEASUREMENT_ID"
};
export const firebaseStroageURL =
"process.env.FB_STORAGE_URL";
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);