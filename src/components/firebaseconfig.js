import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBBLR8Yx3uRMIASDKbGlsP06GwL0OVIF6k",
  authDomain: "signin-70e30.firebaseapp.com",
  projectId: "signin-70e30",
  storageBucket: "signin-70e30.appspot.com",
  messagingSenderId: "1094766189003",
  appId: "1:1094766189003:web:c220856d23fb73bd363e4e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app)
export default auth