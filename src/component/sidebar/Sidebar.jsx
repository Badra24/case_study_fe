import { Box, Center, HStack, Link } from "@chakra-ui/react";

export default function SideBar() {
  return (
    <>
      <Box
        boxShadow="xl"
        className="sideBar"
        borderRightWidth="1px"
        bg="white"
        w="240px"
      >
        <Box className="sideBar">
          <Link href="/home">
            <HStack
              height="150px"
              w="240px"
              justifyContent={"center"}
              spacing={1}
              alignItems={"center"}
              _hover={{ cursor: "pointer" }}
            >
              <Center></Center>
            </HStack>
          </Link>
        </Box>
      </Box>
    </>
  );
}
