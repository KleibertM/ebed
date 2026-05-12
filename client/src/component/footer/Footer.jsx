// import Contact from "../contact/Contact"
// import BannerText from '../bannerText/BannerText';
import { PiFishBold  } from "react-icons/pi";
import { lazy, Suspense } from 'react';


const Contact = lazy(()=> import('../contact/Contact'))
const BannerText = lazy(()=> import('../bannerText/BannerText'))

const Footer = () => {
    return (
        <>
        <Contact />
        <BannerText icon={<PiFishBold  />} text={'Ebed - Libreria Cristiana'} />
        </>
    )
}

export default Footer