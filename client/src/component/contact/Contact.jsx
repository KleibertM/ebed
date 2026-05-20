import { Flex, Image, Heading } from '@chakra-ui/react'
import { PiEnvelopeSimpleOpenFill, PiTiktokLogoFill, PiInstagramLogoFill, PiYoutubeLogoFill  } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import BtnLink from '../btn/BtnLink';
import Logo from '../../assets/img/logo.png'
const Contact = () => {
    return (
        <>
            <Flex flexDirection={'column'} justifyContent={'center'} align={'center'}>
                <Flex flexDirection={['column', 'row']} paddingY={4} gap={10}>
                    <Image
                        src={Logo}
                        loading='lazy'
                        alt='Logo Munay'
                        h={['auto', '12rem']}
                    />
                    <Flex justify={'center'} alignContent={'center'} flexDirection={'column'}>
                        <Flex alignItems={'center'} justifyContent={'center'} mb={4}>
                            <Heading >Redes Sociales</Heading>
                        </Flex>
                        <Flex flexWrap={'nowrap'} align={'center'} justify={'center'} gap={4}>
                        <BtnLink icon={<PiEnvelopeSimpleOpenFill />} link={'mailto:riodefeoficial@gmail.com'} />
                        <BtnLink icon={<FaFacebook />}  link={'https://www.facebook.com/ebedFe'} />
                        <BtnLink icon={<PiTiktokLogoFill />} link={'https://www.tiktok.com/@ebed_fe'} />
                        <BtnLink icon={<PiInstagramLogoFill />} link={'https://www.instagram.com/ebed_fe'} />
                        <BtnLink icon={<PiYoutubeLogoFill  />} link={'https://www.youtube.com/@ebed-fe/featured'} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Contact