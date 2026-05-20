import { ButtonGroup, IconButton, Grid, GridItem, Button, Flex, Box, Input, Select, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import CardComponent from "../Card/CardComponent"
import { useState } from "react"
import { HiSearch } from "react-icons/hi"

const ProductsWithPagination = ({ data }) => {
  console.log('Data llegando :', data);
  
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const [page, setPage] = useState(1)

  // 1. Lógica de filtrado por búsqueda
 const filteredData = Array.isArray(data)
  ? data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : []

  // 2. Lógica de ordenamiento
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === "asc") return a.priceWoo - b.priceWoo
    if (sortOrder === "desc") return b.priceWoo - a.priceWoo
    return 0
  })

  // 3. Paginación basada en los datos ya filtrados y ordenados
  const pageSize = 24
  const totalPages = Math.ceil(data.length / pageSize)
  const offset = (page - 1) * pageSize
  const currentProducts = sortedData.slice(offset, offset + pageSize)


  // 2. Manejadores de página
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages))
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1))

  return (
    <>
      <Box>
        {/* BARRA DE BUSQUEDA Y FILTRO STICKY */}
        <Box
          position="sticky"
          top="50px"
          zIndex="10"
          bg="white"
          py={4}
          boxShadow="sm"
          mb={6}
        >
          <Flex gap={4} direction={["row", "row"]} maxW="container.xl" mx="auto" px={4}>
            <Select
              flex="1"
              placeholder="Ordenar por precio"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Menor precio</option>
              <option value="desc">Mayor precio</option>
            </Select>
            
            <InputGroup flex="2">
              <InputLeftElement pointerEvents="none">
                <HiSearch color="gray.300" />
              </InputLeftElement>
              <Input
                placeholder="Buscar biblia por nombre..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setPage(1) // Resetear a pag 1 al buscar
                }}
              />
            </InputGroup>
          </Flex>
        </Box>
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={6}
          px={["0", "40px"]}
        >
          {currentProducts.map((item) => (
            <GridItem key={item.id} margin="0 auto" >
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
      </Box>
    </>
  )
}

export default ProductsWithPagination;