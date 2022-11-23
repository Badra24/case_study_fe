import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import NavBar from "../../component/navbar/navbar";
import Product from "../../component/product/product";

export default function Home() {
  const router = useRouter();

  const AddnewPro = () => {
    router.push("/Addfile");
  };

  return (
    <>
      <Flex
        bgGradient="linear(to-tr, #ffffff 50%, ##ffffff )"
        w="100%"
        h="100%"
      >
        <Box>
          <NavBar />
          <Flex
            flexWrap={"wrap"}
            paddingTop="10px"
            justifyContent={"space-around"}
          >
            <Box m="10px" h="50px" w="100px" fontWeight="semibold">
              {" "}
              Asset List{" "}
            </Box>
            <Flex>
              <Box m="5px" h="50px" w="200px">
                <Button
                  w="full"
                  bg="#00A8B5"
                  borderRadius="5px"
                  size="md"
                  my="5px"
                  textColor={"white"}
                  onClick={AddnewPro}
                >
                  <Icon boxSize="3" as={AiOutlinePlus} mr="5px" />
                  ADD
                </Button>
              </Box>
            </Flex>
          </Flex>
          <Flex dir="row">
            <Box
              mb={"10px"}
              ml="10px"
              h="100px"
              w="800px"
              fontWeight="semibold"
            ></Box>
          </Flex>

          <Flex>
            <Box
              m="15px"
              h="300px"
              w="1400px"
              fontWeight="semibold"
              pb="100px"
              bg="#ffffff"
            >
              <Product />{" "}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
