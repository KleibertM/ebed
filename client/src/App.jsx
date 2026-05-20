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


function App() {
  const [data, setData] = useState([]); // 1. Estado para los datos
  const [loading, setLoading] = useState(true);
  
  
 useEffect(() => {
  const cargarDatos = async () => {
    try {
      const cache = localStorage.getItem("ebed_catalogo");

      if (cache) {
        const parsed = JSON.parse(cache);

        setData(parsed.data);
        setLoading(false);

        return;
      }

      const result = await getData();

      if (result) {
        setData(result);

        localStorage.setItem(
          "ebed_catalogo",
          JSON.stringify({
            data: result,
          })
        );
      }
    } catch (error) {
      console.error(error);
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
