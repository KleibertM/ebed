
import { useParams } from "react-router-dom";
import { Box, Badge, Flex, Heading, Text, Container, Accordion, AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'
import { BsCart4 } from "react-icons/bs";
import ImageRender from "./ImageRender";
import BtnAddToCart from "../btn/BtnAddToCart";
// import { lazy, Suspense } from 'react';
import MoreItems from "./MoreItems";
import { useEffect } from "react";
import { beiColor } from "../Data/data";

// const ImageRender = lazy(()=> import('./ImageRender'))

const DetailCards = ({data}) => {
    const { id } = useParams()
    const filterData = data.filter((item) => item.id === id)
    let bgPrice = '#58D68D';
    useEffect(() => {
        // Esto asegura que el scroll se posicione en la parte superior cuando el componente se monte
        window.scrollTo(0, 0);
    }, [filterData]);
    return (
        <>
            {filterData.length ? (
                <>
                    <Box borderRadius='lg' overflow='hidden' w={'90%'} h={{ base: '95vh', md: 'auto' }} position={'relative'} bg='white' display={'flex'} flexDirection={['column', 'row']} gap={[0,20]}  justifyContent={'center'} paddingTop={['0', '1rem']} px={['40px', '0']} margin={'0 auto'}>

                        <Box h={{ base: '450px', md: '550px' }} w={['100%', '550px']} overflow={'hidden'} px='8' position={'relative'}  >
                            <Flex w={'100%'} h={'100%'} flexDirection={'column'} position={'absolute'} top={0} left={0} >
                                <ImageRender
                                    hImg={['450px', '500px']}
                                    wImg={['450px', '550px']}
                                    image={filterData[0].imgSrc}
                                    name={filterData[0].title} />

                            </Flex>
                                    <Badge position={'absolute'} bottom={['1rem', '5rem']} right={['1rem' , '2rem']} borderRadius='full' px='2' fontSize={'1.3rem'} bg={bgPrice} color={'#fff'} w={'max-content'}>
                                        S/{filterData[0].priceWoo}
                                    </Badge>
                        </Box>

                        <Flex p='6' gap={4} flexDirection={'column'} h={{ base: '400px', md: '550px' }} position={'relative'}  >
                            <Box display='flex' flexDirection={'column'} gap={[4, 8]}>
                                <Flex justify={'center'} align={'center'}>
                                    <Heading textTransform={'capitalize'} fontFamily={'munayTitle'}>
                                        {filterData[0].title && filterData[0].title}
                                    </Heading>
                                </Flex>
                            </Box>

                            <Flex h={['auto', 'auto']} overflow={'hidden'} py='2' flexDirection={'column-reverse'}>
                                <Container overflowY={'auto'} >
                                    {filterData[0].description}
                                </Container>
                            </Flex>

                            <Flex
                                position={'relative'}
                                justify={'center'}
                                align={'center'}
                                w={['90vw','max-content']}
                                bg={beiColor}
                                py={['4', '2']}
                                h={'auto'}
                                margin={'0 auto'}
                                borderRadius={[50, 50]}
                                overflow={'hidden'}>
                                <BtnAddToCart dataItem={filterData[0]} FlexDirec={'row'} />
                            </Flex>
                        </Flex>
                    </Box>
                    <Flex px={['10px', '40px']} py={['10px', '20px']} bg='whitesmoke' flexDirection={'column'} position={'relative'}>
                        <Heading fontSize={'1.3rem'} display={'flex'} gap={2} justifySelf={'center'} fontFamily={'munayTitle'}>
                            Más productos <BsCart4 />
                        </Heading>
                        <Flex overflowX={'scroll'} >
                            <MoreItems  data={data} />
                        </Flex>
                    </Flex>
                </>

            ) : (
                <Text>cargando / vacio</Text>
            )}
        </>
    )
}

export default DetailCards