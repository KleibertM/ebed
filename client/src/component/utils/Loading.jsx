import { Flex, Text, Box, Spinner } from '@chakra-ui/react'
import { beiColor, purColor } from '../Data/data';
import { keyframes } from '@emotion/react';


const animation = keyframes
    ` 0% {
    opacity: 0;
}

50% {
    transform: scale(1.5);
    opacity: .4;
}
`
    ;

const Loading = ({ hImg }) => {
    const myAnimate = ` ${animation} infinite 1s`
    // 
    return (
        <Flex h={hImg} w={'100%'} justify={'center'} align={'center'} position={'relative'} overflow={'hidden'} >
            <Flex h={'10rem'} w={'10rem'} color={beiColor} bg={purColor} borderRadius={100} fontSize={'2rem'} justify={'center'} align={'center'} position={'relative'} animation={myAnimate}>
                {/* <Text textAlign={'center'}>
                Cargando...
            </Text> */}
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='white'
                    size='xl'
                />
            </Flex>
        </Flex>
    )
}
export default Loading;