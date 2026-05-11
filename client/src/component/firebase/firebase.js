import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAa54Im6dkvYnsMKTFkKFgZb6cdl67sgfc",
  authDomain: "shaddai-f3ac3.firebaseapp.com",
  databaseURL: "https://shaddai-f3ac3-default-rtdb.firebaseio.com", // Muy importante para Realtime
  projectId: "shaddai-f3ac3",
  storageBucket: "shaddai-f3ac3.firebasestorage.app",
  messagingSenderId: "913720266520",
  appId: "1:913720266520:web:e424e7cd83dfe26019d86d",
  measurementId: "G-CZ8MZ8EF2K"
};

// 1. Inicializamos la App una sola vez
const app = initializeApp(firebaseConfig);

// 2. Inicializamos los servicios
export const db = getDatabase(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// 3. Exportamos la app por si la necesitas en otro lado
export default app;