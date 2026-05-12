import { Text, Flex } from '@chakra-ui/react'
import { beiColor, purColor } from '../Data/data'

const BannerText = ({ icon, text }) => {
    return (
        <>
            <Flex bg={purColor} align={'center'} justify={'center'} gap={2} color={beiColor} fontFamily={'munayTitle'}>
                <Text fontSize={'1.2rem'} >
                    {icon}
                </Text>
                <Text fontSize={'1.2rem'} fontWeight={'bold'} >
                    {text}
                </Text>
                <Text fontSize={'1.2rem'} >
                    {icon}
                </Text>
            </Flex>
        </>
    )
}

export default BannerText