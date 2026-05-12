import { Flex, Text, keyframes } from '@chakra-ui/react'
import {  PiFishBold } from "react-icons/pi";
import { beiColor } from '../Data/data';
const animation = keyframes
    `from {
    opacity: 0
}
to {
    opacity: 1
}
`
    ;

const CartNull = () => {
    const myAnimate = ` ${animation} both 1s`
    return (
        <>
            <Flex flexDirection={'column'} align={'center'} justify={'center'} gap={4} animation={myAnimate} h={'80vh'}>

                <Text fontSize={['20rem', 'auto']} 
                color={beiColor}>
                    <PiFishBold />
                </Text>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>
                    ¡La cesta está vacía!
                </Text>
            </Flex>
        </>
    )
}

export default CartNull