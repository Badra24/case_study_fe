import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import LinkNext from "next/link";
import { useRouter } from "next/router";
import { AiFillSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import DarkMode from "../DarkmodeSwitch";

export default function AdminNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Box
        bg="white"
        borderBottomWidth="1px"
        boxShadow="md"
        px={4}
        className="topnavbar"
        zIndex={111}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg="#ffffff"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <DarkMode />
          <Link href="/home">
            <HStack
              spacing={8}
              alignItems={"center"}
              _hover={{ cursor: "pointer" }}
            ></HStack>
          </Link>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))} */}

              <Link onClick={onOpenCart}>
                <Button
                  background="white"
                  _hover={{
                    background: "#E8F5FD",
                    color: "#00ACEE",
                    borderBottomWidth: "3px",
                    borderBottomColor: "#3B9AE1",
                  }}
                  borderRadius={0}
                  h={16}
                  mr="8px"
                >
                  <Icon boxSize="7" as={IoMdNotificationsOutline} />
                </Button>
              </Link>
            </HStack>
            <Menu>
              <MenuButton
                style={{ textDecoration: "none" }}
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Box display="flex">
                  <Avatar
                    mx="10px"
                    alignSelf="center"
                    size={"sm"}
                    src={
                      "https://i.pinimg.com/564x/bb/84/e8/bb84e8891c5b8aea249381b5d7c936e5.jpg"
                    }
                  />
                  <Box textAlign="left">
                    <Text></Text>
                    <Text fontSize="xs">Case</Text>
                  </Box>
                </Box>
              </MenuButton>

              <MenuList>
                <LinkNext href="/home">
                  <MenuItem>
                    <Icon
                      boxSize="6"
                      as={
                        router.pathname == "/home"
                          ? AiFillSetting
                          : IoSettingsOutline
                      }
                    />
                    <Text ml="10px">Pengaturan</Text>
                  </MenuItem>
                </LinkNext>
                <MenuItem>
                  <Icon boxSize="6" as={BiHelpCircle} />
                  <Text ml="10px">Bantuan</Text>
                </MenuItem>
                <MenuDivider />
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
