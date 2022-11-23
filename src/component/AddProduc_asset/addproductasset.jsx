import React from "react";

import {
  Box,
  Button,
  chakra,
  Divider,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Menu,
  MenuItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import qs from "qs";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/api";

export default function App(props) {
  const { id } = props;
  const toast = useToast();
  const {
    isOpen: isOpenStock,
    onOpen: onOpenStock,
    onClose: onCloseStock,
  } = useDisclosure();

  // axios getCategory//
  const [Asset, setAsset] = useState([]);

  async function getAsset() {
    // setTimeout(()=>{

    await axiosInstance.get("/product").then((res) => {
      const temp = res.data.result;
      setAsset([...temp]);
      console.log(res.data.result);
    });
  }

  const formik = useFormik({
    initialValues: {
      product_id2: "",
      product_id1: "",

      asset_id: "",
    },
    onSubmit: async () => {
      const { asset_id, product_id2, product_id1 } = formik.values;

      alert(asset_id);
      alert(product_id2);
      alert(product_id1);

      try {
        let body = {
          product_id2,
          asset_id,
          product_id1,
        };

        await axiosInstance
          .post(`/productAsset/create`, qs.stringify(body))
          .then(() => {
            console.log(id);
            console.log(product_id2);
            toast({
              title: "Product Asset has been added",
              status: "success",
              isClosable: true,
            });
          });
      } catch (err) {
        console.log(err);

        toast({
          title: "Error",
          status: "error",
          isClosable: true,
        });
      }
    },
  });

  useEffect(() => {
    getAsset();
  }, []);
  return (
    <>
      <Menu>
        <MenuItem onClick={onOpenStock}>
          <Text>Product Asset </Text>
        </MenuItem>
        <Modal isOpen={isOpenStock} onClose={onCloseStock} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalBody>
              <Box
                bg="transparent"
                _dark={{
                  bg: "#111",
                }}
                p={10}
              >
                <Box>
                  <SimpleGrid
                    display={{
                      base: "initial",
                      md: "grid",
                    }}
                    columns={{
                      md: 3,
                    }}
                    spacing={{
                      md: 6,
                    }}
                  >
                    <GridItem
                      colSpan={{
                        md: 1,
                      }}
                    >
                      <Box px={[4, 0]}>
                        <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                          New Product Asset
                        </Heading>
                      </Box>
                    </GridItem>
                    <GridItem
                      mt={[5, null, 0]}
                      colSpan={{
                        md: 2,
                      }}
                    >
                      <chakra.form
                        method="POST"
                        shadow="base"
                        rounded={[null, "md"]}
                        overflow={{
                          sm: "hidden",
                        }}
                      >
                        <Stack
                          px={4}
                          py={5}
                          bg="white"
                          _dark={{
                            bg: "#141517",
                          }}
                          spacing={6}
                          p={{
                            sm: 6,
                          }}
                        >
                          <SimpleGrid columns={3} spacing={6}>
                            <FormControl as={GridItem} colSpan={[3, 2]}>
                              <FormLabel
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                  color: "gray.50",
                                }}
                              >
                                {id}
                              </FormLabel>
                              <FormLabel
                                fontSize="sm"
                                fontWeight="md"
                                color="gray.700"
                                _dark={{
                                  color: "gray.50",
                                }}
                              >
                                {id}
                              </FormLabel>
                              <Input
                                onChange={(e) => {
                                  formik.setFieldValue(
                                    "asset_id",
                                    e.target.value
                                  );
                                }}
                              />
                            </FormControl>
                            <FormControl as={GridItem} colSpan={[3, 2]}>
                              {/* {category?.map ((val)=>( */}
                              <Box
                                display="flex"
                                flexWrap="wrap"
                                justifyContent="space-evenly"
                              >
                                {formik.values.product_id1}
                                <Select
                                  // defaultValue={val.category}
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      "product_id1",
                                      e.target.value
                                    );
                                  }}
                                >
                                  {Asset.map((val, index) => (
                                    <option value={val.id}>
                                      {val.product_name}
                                    </option>
                                  ))}
                                </Select>
                              </Box>

                              <Box
                                display="flex"
                                flexWrap="wrap"
                                justifyContent="space-evenly"
                              >
                                {formik.values.product_id2}
                                <Select
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      "product_id2",
                                      e.target.value
                                    );
                                  }}
                                >
                                  {Asset?.map((val, index) => (
                                    <option value={val.id}>
                                      {val.product_name}
                                    </option>
                                  ))}
                                </Select>
                              </Box>
                              {/* ))} */}
                            </FormControl>
                          </SimpleGrid>
                        </Stack>
                        <Box
                          px={{
                            base: 4,
                            sm: 6,
                          }}
                          py={3}
                          bg="gray.50"
                          _dark={{
                            bg: "#121212",
                          }}
                          textAlign="right"
                        >
                          <Button
                            type="submit"
                            colorScheme="twitter"
                            _focus={{
                              shadow: "",
                            }}
                            fontWeight="md"
                            onClick={formik.handleSubmit}
                          >
                            Save
                          </Button>
                        </Box>
                      </chakra.form>
                    </GridItem>
                  </SimpleGrid>
                </Box>

                <Divider
                  my="5"
                  borderColor="gray.300"
                  _dark={{
                    borderColor: "whiteAlpha.300",
                  }}
                  visibility={{
                    base: "hidden",
                    sm: "visible",
                  }}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Menu>
    </>
  );
}
