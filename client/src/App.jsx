import style from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './component/cart/Cart'
import DetailCards from './component/Card/DetailCards'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'
import { CartProvider } from './context/cartContext'
import BtnWhatsapp from './component/whatsapp/BtnWhatsApp'
import { useEffect, useState } from 'react'
import { getData } from './component/Data/data'

// const Cart = lazy(()=> import('./component/cart/Cart'))
// const Footer = lazy(()=> import('./component/footer/Footer'))

function App() {
  const [data, setData] = useState([]); // 1. Estado para los datos
  const [loading, setLoading] = useState(true);
  
 useEffect(() => {
    const cargarDatos = async () => {
      // 1. Intentamos obtener la data del almacenamiento local primero
      const cachedData = localStorage.getItem("ebed_catalogo");
      
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false); // Si hay caché, dejamos de mostrar el spinner rápido
      }

      try {
        // 2. Traemos la data fresca de Firebase
        const result = await getData(); 
        
        if (result) {
          setData(result);
          // 3. Guardamos/Actualizamos el caché para la próxima visita
          localStorage.setItem("ebed_catalogo", JSON.stringify(result));
        }
      } catch (error) {
        console.error("Error al cargar desde Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  return (
    <>
      <CartProvider>
        <div className={style.app_container}>
          <Navbar />
          <div className={style.main_content}>
            <Routes>
              <Route path='/' element={<Home data={data} />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/detail/:id' element={<DetailCards data={data} />} />
            </Routes>
          </div>
          <BtnWhatsapp />
          <Footer />
        </div>
      </CartProvider>
    </>
  )
}

export default App
