import { Box, Flex } from "@chakra-ui/react";

import AddFile from "../../component/Addfile/addfile";

export default function listProduct() {
  return (
    <>
      <Flex bgGradient="linear(to-tr, #ffffff 50%, #ddf1f9 )">
        <Flex>
          <Box m="15px" h="300px" w="1000px" fontWeight="semibold" pb="100px">
            <AddFile />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
