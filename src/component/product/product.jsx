import {
  Checkbox,
  Icon,
  Image,
  Switch,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../config/api";
import DeletProduct from "./../delete/delete";

export default function productTabel(props) {
  const [product, setProduct] = useState([0]);
  const autoReducer = useSelector((state) => state.auto_Reducer);

  async function getProduct() {
    await axiosInstance.get("/asset", {}).then((res) => {
      const data = res.data.result;
      setProduct(data);
      console.log(res.data.result);
    });
  }

  useEffect(() => {
    getProduct();
  }, [autoReducer]);
  return (
    <>
      <TableContainer rounded={"lg"}>
        <Table variant="simple">
          <TableCaption>Product List </TableCaption>
          <Thead>
            <Tr bg={"#E1E1F7"}>
              <Th>
                <Checkbox></Checkbox>
              </Th>
              <Th>
                ID
                <Icon as={FaSort} />
              </Th>
              <Th>
                Date
                <Icon as={FaSort} />
              </Th>
              <Th>
                Product name
                <Icon as={FaSort} />
              </Th>
              <Th>
                Size
                <Icon as={FaSort} />
              </Th>
              <Th isNumeric>
                Path
                <Icon as={FaSort} />
              </Th>
              <Th isNumeric>
                description
                <Icon as={FaSort} />
              </Th>

              <Th isNumeric>
                Categories
                <Icon as={FaSort} />
              </Th>
              <Th isNumeric>
                Delete
                <Icon as={FaSort} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
                <Td>
                {renderProductList()}

                </Td>
              </Tr> */}
            {product?.map((product, index) => (
              <Tr key={product.id}>
                <Td>
                  <Checkbox></Checkbox>
                </Td>
                <Td>{product.id}</Td>
                <Td>{moment(product.createdAt).format("YYYY-MM-DD")}</Td>
                <Td>{product.name}</Td>
                <Td>{product.size} </Td>
                <Td>
                  <Image
                    src={`${product.path}`}
                    w="90px"
                    h="90px"
                    objectFit="cover"
                    rounded={5}
                  />
                </Td>

                <Td>
                  {" "}
                  {product.Categories?.map((val, index) =>
                    index == product.Categories.length - 1 ? (
                      <>{val.category}</>
                    ) : (
                      <>{val.category}</>
                    )
                  )}
                </Td>

                <Td>
                  <Switch colorScheme="teal" size="md" />
                </Td>

                <Td>
                  <DeletProduct idDEl={product.id} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
