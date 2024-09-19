import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { BsInstagram } from "react-icons/bs";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

export const UserHeader = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();

  const copyUrl = () => {
    const currentUrl = window.location.href;
    console.log(currentUrl);

    navigator.clipboard.writeText(currentUrl).then(
      toast({
        description: "Link has been copied to clipboard",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    );
  };

  return (
    <>
      <VStack mt="60px" alignItems={"start"}>
        <Flex width={"full"} justifyContent={"space-between"}>
          <Box>
            <Text fontSize={"2xl"}>Mark Zuckerberg</Text>
            <Flex gap={"4"}>
              <Text fontSize={"sm"}>zukerberg</Text>
              <Text
                fontSize={"xs"}
                bg={"gray.dark"}
                color={"gray.light"}
                p={1}
                borderRadius={"full"}
              >
                thread.net
              </Text>
            </Flex>
          </Box>
          <Box>
            <Avatar
              src="/public/zuck-avatar.png"
              name="Mark Zuckerberg"
              size={"xl"}
            >
              <AvatarBadge boxSize="0.8em" bg="green.500" />
            </Avatar>
          </Box>
        </Flex>
        <Text>Co-founder, executive chairman and CEO of Meta Platforms.</Text>
        <Flex mt={3} w={"full"} justifyContent={"space-between"}>
          <Flex gap={3} alignItems={"center"}>
            <Text color={"gray.light"}>3.2K followers</Text>
            <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"}></Box>
            <Link color={"gray.light"}>instagram.com</Link>
          </Flex>
          <Flex gap={1}>
            <Box
              className={
                colorMode === "dark" ? "icon-container" : "icon-light-container"
              }
            >
              <BsInstagram size={23} cursor={"pointer"} />
            </Box>
            <Box
              className={
                colorMode === "dark" ? "icon-container" : "icon-light-container"
              }
            >
              <Menu>
                <MenuButton>
                  <PiDotsThreeOutlineVertical size={23} cursor={"pointer"} />
                  <Portal>
                    <MenuList
                      bg={colorMode === "dark" ? "gray.dark" : "gray.light"}
                    >
                      <MenuItem
                        bg={colorMode === "dark" ? "gray.dark" : "gray.light"}
                        onClick={copyUrl}
                      >
                        Copy Link
                      </MenuItem>
                    </MenuList>
                  </Portal>
                </MenuButton>
              </Menu>
            </Box>
          </Flex>
        </Flex>
        <Flex w={"full"}>
          <Flex
            flex={1}
            borderBottom={`1.8px solid ${
              colorMode === "dark" ? "white" : "black"
            }`}
            justifyContent={"center"}
            pb={2}
          >
            <Text fontWeight={"bold"} cursor={"pointer"}>
              Threads
            </Text>
          </Flex>
          <Flex
            flex={1}
            borderBottom={"1px solid gray"}
            justifyContent={"center"}
            pb={2}
          >
            <Text color={"gray.light"} fontWeight={"bold"} cursor={"pointer"}>
              Replies
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};
