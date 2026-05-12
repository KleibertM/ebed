"use client"
import { ButtonGroup, IconButton, Grid, GridItem, Button, Flex } from "@chakra-ui/react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import CardComponent from "../Card/Card"
import { useState } from "react"

const ProductsWithPagination = ({ data }) => {
  const [page, setPage] = useState(1)
  const pageSize = 24 

  // 1. Lógica de segmentación
  const totalPages = Math.ceil(data.length / pageSize)
  const offset = (page - 1) * pageSize
  const currentProducts = data.slice(offset, offset + pageSize)

  // 2. Manejadores de página
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages))
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1))

  return (
    <>
      <Grid 
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} 
        gap={6}
      >
        {currentProducts.map((item) => (
          <GridItem key={item.id} margin="0 auto">
            <CardComponent dataItem={item} />
          </GridItem>
        ))}
      </Grid>

      {/* 3. Paginación Manual para Chakra v2 */}
      <Flex justifyContent="center" mt={10} mb={10}>
        <ButtonGroup variant="outline" spacing="4">
          <IconButton
            icon={<HiChevronLeft />}
            onClick={handlePrev}
            isDisabled={page === 1}
            aria-label="Anterior"
          />
          
          {/* Indicador de página */}
          <Button variant="ghost" cursor="default" _hover={{ bg: "transparent" }}>
            Página {page} de {totalPages}
          </Button>

          <IconButton
            icon={<HiChevronRight />}
            onClick={handleNext}
            isDisabled={page === totalPages}
            aria-label="Siguiente"
          />
        </ButtonGroup>
      </Flex>
    </>
  )
}

export default ProductsWithPagination;