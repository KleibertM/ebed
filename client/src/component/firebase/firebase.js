import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const {
  VITE_FIREBASE_apiKey,
  VITE_FIREBASE_authDomain,
  VITE_FIREBASE_databaseURL,
  VITE_FIREBASE_projectId,
  VITE_FIREBASE_storageBucket,
  VITE_FIREBASE_messagingSenderId,
  VITE_FIREBASE_appId,
  VITE_FIREBASE_measurementId
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_apiKey,
  authDomain: VITE_FIREBASE_authDomain,
  databaseURL: VITE_FIREBASE_databaseURL,
  projectId: VITE_FIREBASE_projectId,
  storageBucket: VITE_FIREBASE_storageBucket,
  messagingSenderId: VITE_FIREBASE_messagingSenderId,
  appId: VITE_FIREBASE_appId,
  measurementId: VITE_FIREBASE_measurementId
};

// 1. Inicializamos la App una sola vez
const app = initializeApp(firebaseConfig);

// 2. Inicializamos los servicios
export const db = getDatabase(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// 3. Exportamos la app por si la necesitas en otro lado
export default app;