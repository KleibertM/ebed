import { Text, Flex } from '@chakra-ui/react'

const BannerText = ({ icon, text }) => {
    return (
        <>
            <Flex bg={'#3C0085'} align={'center'} justify={'center'} gap={2} color={'#FFF'} fontFamily={'munayTitle'}>
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