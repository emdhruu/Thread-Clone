import { Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6}>
      <Image
        cursor={"pointer"}
        alt="logo"  
        src={
          colorMode === "dark"
            ? "public/light-logo.svg"
            : "public/dark-logo.svg"
        }
        onClick={toggleColorMode}
        w={7}
      />
    </Flex>
  );
}
