import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        bgColor={"#FB6F92"}
        color={"rgb(235, 235, 235)"}
        p={3}
      >
        <Link to={"/"}>
          <Box fontWeight="bold" fontSize="xl">
            <Image width={"25vh"} src="calofit-white.png" />
          </Box>
        </Link>
        <Box marginRight={"1%"}>
          <IconButton
            aria-label="Open menu"
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
            icon={<HamburgerIcon margin={"auto"} />}
            ref={btnRef}
            color={"black"}
            backgroundColor={"gray.300"}
          />
        </Box>
        <HStack
          as="nav"
          spacing={8}
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
          paddingRight={"10"}
          
        >

          <Link to={"/contact"}>
            <Text
              _hover={{
                color: "#495867",
              }}
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
            >
              Contact
            </Text>
          </Link>

          <Link to={"/about"}>
            <Text
              _hover={{
                color: "#495867",
              }}
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
            >
              About
            </Text>
          </Link>

          <Link to="/cart" >
            <Text
              _hover={{
                color: "#495867",
              }}
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
            >
              Cart(0)
            </Text>
          </Link>

          <Link to="/signup">
            <Text
              _hover={{
                color: "#495867",
              }}
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
            >
              Sign Up
            </Text>
          </Link>

          <Link to={"/login"}>
            <Button
              _hover={{
               color: "#495867",
              }}
              variant={"link"}
              color={"rgb(235, 235, 235)"}
            >
              <Text
                _hover={{
                  color: "#495867",
                }}
                fontSize={"1.2rem"}
                fontWeight={"semibold"}
              >
                Log In
              </Text>
            </Button>
          </Link>
       
        </HStack>
      </Flex>
      {isOpen && (
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerContent
          bgColor={"#FB6F92"}
           color={"rgb(224, 224, 224)"}
          >
            <DrawerCloseButton />
            <VStack m={8} align={"stretch"} spacing={10}>
              <Link to={"/contact"}>
            <Text
              _hover={{
                color: "#495867",
              }}
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
            >
              Contact
            </Text>
          </Link>

          <Link to={"/about"}>
            <Text
              _hover={{
                color: "#495867",
              }}
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
            >
              About
            </Text>
          </Link>

          <Link to="/cart" >
            <Text
              _hover={{
                color: "#495867",
              }}
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
            >
              Cart(0)
            </Text>
          </Link>

          <Link to="/signup">
            <Text
              _hover={{
                color: "#495867",
              }}
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
            >
              Sign Up
            </Text>
          </Link>

          <Link to={"/login"}>
            <Button
              _hover={{
                color: "#495867",
                bgColor :"blue"
              }}
              variant='outline'
              color={"rgb(235, 235, 235)"}
              backgroundColor={"#495867"}
              border={"none"}
            >
              <Text
                _hover={{
                  color: "#495867",
                }}
                fontSize={"1.2rem"}
                fontWeight={"semibold"}
              >
                Log In
              </Text>
            </Button>
          </Link>

            </VStack>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
};

export default Navbar;
