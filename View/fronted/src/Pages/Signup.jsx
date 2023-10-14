import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Select,
} from "@chakra-ui/react";
import { color } from "framer-motion";

const Signup = () => {
  return (
    <Layout>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign Up to your account</Heading>

            <Input  placeholder="Name" />
            <Input placeholder={"Email"} type="email"/>
            <Input placeholder="Password"  />
            <Input placeholder="Phone"  />
            <Input placeholder="Address"  />

            <Select placeholder="Select role" >
              <option value="0">User</option>
              <option value="1">Admin</option>
            </Select>

            <Stack spacing={6}>
              <Button
              _hover={{bg:"#c9184a"}}
              bg="#ff4d6d" color="white">
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    </Layout>
  );
};

export default Signup;
