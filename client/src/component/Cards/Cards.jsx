import { useEffect, useState } from 'react'
import CardComponent from '../Card/Card'
// import { data } from '../Data/data.json'
// import { dataMunay, getData } from '../Data/data'
import { Grid, GridItem } from '@chakra-ui/react'
import { getData } from '../Data/data';
const CardsContent = ({data}) => {
     // Se ejecuta solo al montar el componente
    // const filterData = data.filter((item) => item.tipo === stateFilter)

    // if (loading) return <p>Cargando datos...</p>;

    return (
        <>
            <Grid h='auto'
                templateRows={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)',   'repeat(3, 1fr)']}
                gap={[4, 8]} position={'relative'} 
                >
                {data?.map((item, index) => (
                    <>
                        <GridItem key={item.id || index} margin={'0 auto'} >
                            <CardComponent dataItem={item} />
                        </GridItem>
                    </>
                ))}
            </Grid>
        </>

    )
}

export default CardsContent