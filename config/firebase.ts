import { initializeApp, getApps, getApp } from "firebase/app";
import Constants from "expo-constants";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};

let firebaseApp;

if (getApps().length == 0) {
  firebaseApp = initializeApp(firebaseConfig);
} else if (getApps().length != 0) {
  firebaseApp = getApp();
}

export default firebaseApp;