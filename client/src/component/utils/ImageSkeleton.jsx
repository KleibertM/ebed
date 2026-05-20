import { Card as ChakraCard, Stack, Skeleton, } from "@chakra-ui/react";

const ImageSkeleton = ({ wImg, hImg }) => {
  return (
   <ChakraCard
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      w={"100%"}
      h="auto"
      overflow="hidden"
      borderRadius={4}
      p={2}
      position="relative"
      bg="white"
      paddingBottom={1}
    >
      <Skeleton height="160px" />

      <Stack marginTop="6" marginBottom={4} spacing="2" h="auto" px="2" w="100%">
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </ChakraCard>
  );
};

export default ImageSkeleton;