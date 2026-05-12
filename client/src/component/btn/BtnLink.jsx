import { Button, Link as ChakraLink, Text } from '@chakra-ui/react'

const BtnLink = ({link, icon}) => {
    return (
            <ChakraLink href={link} target="_blank">
                    <Button bg={'#EDE8D0'} variant='outline' borderRadius={50}
                    h={['40px', '50px']}
                    w={['40px', '50px']}
                    alignContent={'center'}
                    justifyContent={'center'}
                    name='enlace social'
                    >
                        <Text fontSize={'2rem'} color={'#9d00Ff'}>
                            {icon}
                        </Text>
                    </Button>
                </ChakraLink>
    )
}

export default BtnLink