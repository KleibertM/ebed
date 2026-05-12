
import {Flex} from '@chakra-ui/react'
import CardComponent from './CardComponent'

const MoreItems = ({ data }) => {

    return (
        <>
            <Flex justify={'center'} align={'center'} gap={10} paddingY={4} marginX={2}>
                {data.map((item, index) => (
                    <CardComponent dataItem={item} key={index}/>
                ))}
            </Flex>
        </>
    )
}

export default MoreItems