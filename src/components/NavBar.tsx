import { Box, Flex } from "@chakra-ui/layout";
import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { userInfo } from "node:os";
import React from "react";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  // data is loading
  if (fetching) {
    // user is not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color={"white"} mr={2}>
            login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color={"white"}>register</Link>
        </NextLink>
      </>
    );
    // user is logged in
  } else {
    body = (
      <>
        <Flex color="white">
          {data.me.username}
          <Button ml={4} variant="link">
            logout
          </Button>
        </Flex>
      </>
    );
  }
  return (
    <Flex bg="forestgreen" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
