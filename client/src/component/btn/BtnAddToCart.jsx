import { useState } from "react";
import { useCart } from "../../hook/cartHook";
import { Button, useToast, Select, Flex, Text, Tooltip } from '@chakra-ui/react'
import { PiBagFill } from "react-icons/pi";

const BtnAddToCart = ({ dataItem, FlexDirec }) => {
    const { addToCart } = useCart()
    const toast = useToast()
    let bgPrice ='#9d00Ff';
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <Flex 
            flexDirection={FlexDirec}
            w={'100%'}
            justify={'center'} 
            gap={2}
            >
                
                <Select
                    name="elegir cantidad"
                    border={`2px solid ${bgPrice}`}
                    borderRadius={'9999px'}
                    w={['100%', 'auto']}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))} // Actualizar la cantidad seleccionada 
                >
                    {[...Array(24).keys()].map((number) => (
                        <option
                            key={number + 1}
                            value={number + 1}
                        >
                            {number + 1}
                        </option>
                    ))}
                </Select>
                <Tooltip label='Agregar a la Cesta' >
                    <Button w={['100%', 'auto']} bg={bgPrice} color={'#EDE8D0'} name="Agregar a la Cesta" gap={2}
                        onClick={() => {
                            const productWithQuantity = { ...dataItem, quantity }; // Agregar la cantidad seleccionada al producto
                            addToCart(productWithQuantity); // Llamar a addToCart con el producto actualizado
                            toast({
                                title: 'Agregaste a la Cesta',
                                description: `Se agrego ${quantity} marcianos de ${dataItem.title} a la Cesta.`,
                                status: 'success',
                                duration: 1500,
                                isClosable: true,
                            });
                        }}
                        borderRadius={50}>
                        <Text>
                            Añadir a la
                        </Text>
                        <Text fontSize={'2rem'}>
                            <PiBagFill />
                        </Text>
                    </Button>
                </Tooltip>
            </Flex>
        </>
    )
}
export default BtnAddToCart