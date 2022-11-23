import {
  Box,
  Button,
  Icon,
  Menu,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { GoTrashcan } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../config/api";

export default function DeletProduct(props) {
  // const {id} = useParams()
  const { idDEl } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const autoReducer = useSelector((state) => state.auto_Reducer);
  const dispatch = useDispatch();

  const toast = useToast();

  async function deletProduct() {
    try {
      await axiosInstance.delete(`/asset/delete/` + idDEl);
      dispatch({
        type: "RENDER_POST",
        payload: {
          value: !autoReducer,
        },
      });

      toast({
        title: "Succes",
        description: "Succes deleting product",
        status: "success",
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        status: "error",
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Button
        focusBorderColor="black"
        color="#00A8B5"
        ml="10px"
        onClick={onOpen}
      >
        <Icon as={GoTrashcan} />
      </Button>
      <Menu>
        <MenuItem>
          <Text fontWeight="semibold"></Text>
        </MenuItem>
        <Modal isOpen={isOpen} onClose={onClose} size="xs">
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent>
            <ModalHeader>Delete Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box justifyContent={"space-between"}>
                <Text>
                  If deleted, the product item data that has been entered will
                  be lost and the product item will be lost from the product
                  list
                </Text>
              </Box>
              <Box mt="10px" display="flex" justifyContent="flex-end">
                <Button
                  mr={3}
                  colorScheme="red"
                  onClick={() => {
                    async function submit() {
                      await deletProduct();
                    }
                    submit();
                  }}
                >
                  Delete
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Menu>
    </>
  );
}
