import {
    Flex, Box, Text,
} from '@chakra-ui/react'
// import ImageRender from './ImageRender';
import { Link } from 'react-router-dom'
import BtnAddToCart from '../btn/BtnAddToCart';
import { lazy } from 'react';
import { beiColor, purColor } from '../Data/data';
import { useState } from 'react';
import Loading from '../utils/Loading';
import ImageSkeleton from '../utils/ImageSkeleton';


const ImageRender = lazy(() => import('./ImageRender'))

const CardComponent = ({ dataItem }) => {
    const { id, title, description, imgSrc, priceWoo } = dataItem;
    const [imageLoaded, setImageLoaded] = useState(false)

    let bgPrice = '#58D68D';
    return (
        <>
            <Flex flexDirection={'column'} gap={2}
                borderRadius={10} key={id} position={'relative'}
                w={'max-content'}
                boxShadow={'0 4px 10px #000'}
                paddingBottom={'1rem'}
            >
                <Box
                    h={['350px', '350px']}
                    w={['90vw', '300px']}
                    position={'relative'}
                    borderRadius={10}
                    overflow={'hidden'}

                >
                    <Link to={`/detail/${id}`}>
                        {!imageLoaded && <ImageSkeleton wImg={'100%'} hImg={'100%'} />}

                        <ImageRender
                            image={imgSrc}
                            name={name}
                            wImg={'100%'}
                            hImg={'max-content'}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                display: imageLoaded ? 'block' : 'none'
                            }}
                        />
                        <Flex justify={'space-between'}
                            align={'center'}
                            position={'absolute'}
                            bottom={0}
                            left={0}
                            paddingX={2}
                            w={'100%'}
                            color={'white'}
                            h={'50px'}
                            backdropFilter='auto' backdropBlur='12px'
                            gap={2}
                        >
                            <Text textOverflow={'ellipsis'}
                                whiteSpace={'nowrap'}
                                fontWeight={'bold'}
                                textShadow={`0 5px 10px ${beiColor}`}
                                maxWidth={'2rem'}
                                fontFamily={'munayTitle'}
                                color={purColor}
                            >
                                {title}
                            </Text>

                            <Text bg={bgPrice}
                                borderRadius={20}
                                paddingX={2}
                                fontWeight={'bold'}
                                textOverflow={'ellipsis'}
                                whiteSpace={'nowrap'}
                                h={['25px', 'auto']}
                                justifyItems={'center'}
                                textAlign={'center'}>
                                S/{priceWoo}
                            </Text>

                        </Flex>
                    </Link>
                </Box>
                <Flex gap={2} px={['10px', '20px']} justify={'space-around'} w={['100#', '100%']}>
                    < BtnAddToCart dataItem={dataItem} FlexDirec={['row', 'row']} />
                </Flex>
            </Flex>
        </>
    )
}

export default CardComponent