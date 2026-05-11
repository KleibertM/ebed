import { ref, set, get, child } from "firebase/database";
import { db } from "./firebase"; // Tu archivo unificado
// import { ProductLoader } from "../../utils/ProductLoader";

// Función para subir los datos (Úsala una sola vez o para actualizar)
export const uploadProductsToFirebase = async (products) => {
  try {
    const dataRef = ref(db, 'data');
    await set(dataRef, products);
    // console.log("¡Datos subidos exitosamente a Firebase!");
  } catch (error) {
    console.error("Error al subir a Firebase:", error);
  }
};

// Función para obtener los datos de Firebase
export const fetchProductsFromFirebase = async () => {
  try {
    const dataRef = ref(db, 'data');
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No hay datos disponibles en Firebase");
      return [];
    }
  } catch (error) {
    console.error("Error al obtener datos de Firebase:", error);
    throw error;
  }
};

export const fetchProductDetailFromFirebase = async (id) => {
 try {
    const dataRef = ref(db, 'data');
    const snapshot = await get(dataRef);
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      
      // Convertimos el objeto/array de Firebase en un array de JS y buscamos por el campo 'id'
      const allProducts = Array.isArray(data) ? data : Object.values(data);
      const product = allProducts.find(p => p.id === id);
      
      return product || null; 
    }
    return null;
  } catch (error) {
    console.error("Error al obtener el detalle:", error);
    throw error;
  }
};

// export const fijarDatosEnFirebase = async () => {
//   // 1. Cargamos la data del Excel local con las URLs corregidas
//   // const data = await ProductLoader('/productos_detallados.xlsx');
  
//   if (data.length > 0) {
//     // 2. Usamos 'set' para grabar la lista completa en el nodo 'productos'
//     // Al usar 'set', los datos se guardan permanentemente en los servidores de Google
//     await set(ref(db, 'productos'), data);
//     // console.log("Datos grabados permanentemente en Firebase.");
//   }
// };