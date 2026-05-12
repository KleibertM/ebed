import Banner from "../Banner/Banner";
import { PiBookOpenTextFill , PiFishBold   } from "react-icons/pi";
import { lazy } from 'react';
import ProductsWithPagination from "../Cards/ProductsWithPagination";

const Items = lazy(()=> import("../Items/Items"))
const BannerText = lazy(()=> import("../bannerText/BannerText"))

const Home = ({data}) => {
    return (
        <> 
            <BannerText  icon={<PiFishBold   />} text={'¡REALIZA TU PEDIDO AHORA!'} />
            <Banner />
            <ProductsWithPagination  data={data} />
            <BannerText  icon={<PiBookOpenTextFill  />} text={'Sobre Nosotros'} />
            <Items 
                idTema={'#mision'}
                image={'https://cdn-icons-png.flaticon.com/512/102/102349.png'}
                title={'Misión'}
                text={'Nuestra misión es facilitar el acceso a la Palabra de Dios a través de una plataforma digital innovadora, ofreciendo una amplia variedad de Biblias Reina Valera 1960 con diseños que inspiren a cada creyente. Existimos para servir al Cuerpo de Cristo, proveyendo herramientas que fortalezcan el estudio bíblico y fomenten un encuentro diario y profundo con nuestro Señor Jesucristo.'}
                resaltarText={['refrescante y saludable', 'naturales y frescos', 'calidad, la innovación y la excelencia']}
                diretionY={'column'}
                diretionX={'row'}
            />

            <Items
                idTema={'#vision'}
                image={'https://cdn-icons-png.flaticon.com/512/561/561094.png'}
                title={'Visión'}
                text={'Ser la librería cristiana online referente en el Perú, reconocida por nuestra fidelidad a los principios bíblicos y la excelencia tecnológica. Aspiramos a que cada hogar tenga una Biblia que no solo sea un libro, sino un puente hacia una relación personal y transformadora con Cristo, extendiendo Su mensaje a través de cada entrega y cada conexión digital.'}
                resaltarText={['sabor natural y fresco', 'deliciosos productos', 'salud y la calidad.']}
                diretionY={'column'}
                diretionX={'row-reverse'}
            />
            <Items
                idTema={'#valores'}
                image={'https://cdn-icons-png.flaticon.com/512/5002/5002927.png'}
                title={'Valores'}
                text={'Fidelidad Bíblica: Priorizamos la distribución de la sana doctrina plasmada en la versión Reina Valera 1960.  Excelencia en el Servicio: Trabajamos para el Señor, por lo que buscamos que cada proceso desde el código de la web hasta la entrega en Los Olivos sea de la más alta calidad. Propósito Eterno: Entendemos que nuestra labor técnica tiene un impacto espiritual; cada Biblia vendida es una semilla del Evangelio.'}
                resaltarText={['sabor natural y fresco', 'deliciosos productos', 'salud y la calidad.']}
                diretionY={'column'}
                diretionX={'row-reverse'}
            />
        </>
    )
}

export default Home;