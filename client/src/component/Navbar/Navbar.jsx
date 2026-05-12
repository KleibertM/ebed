import {Flex, Text, Avatar} from '@chakra-ui/react'
// import Sidebar from '../sidebar/Sidebar'
import Logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom'
// import { lazy, Suspense } from 'react';
import BtnSidebar from '../sidebar/BtnSidebar';
import { PiBagFill, PiPhoneCallFill } from "react-icons/pi";
// const Sidebar = lazy(()=> import('../sidebar/Sidebar'))

const Navbar = () => {
    

    return ( 
        <>
        <Flex justify={'space-between'} align={'center'} h={['60px', '70px']} position={'fixed'} zIndex={999} w={'100vw'} bg={'#9d00Ff'} left={0} paddingX={['20px', '60px']}>
            <Link to={'/'} >
                <Avatar size={['md', 'lg']} name='Munay - Marcianos Artesanales' src={Logo} bg={'#EDE8D0'} 
                loading='lazy' />
            </Link>

            <BtnSidebar link={'/cart'} icon={<PiBagFill />} />
            {/* <Sidebar /> */}
        </Flex>
        </>
    )
}

export default Navbar