import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import { useState } from "react";

const UserPost = () => {
  const [liked, setLiked] = useState();
  return (
    <Link to={"/markzuckerberg/post/1"}>
      <Flex gap={3} mb={5} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar
            size="md"
            name="Mark Zuckerberg"
            src="/public/zuck-avatar.png"
          />
          <Box w={0.5} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box position={"relative"} w={"full"} mb={2}>
            <Avatar
              size={"sm"}
              name="dan abramov"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={"0px"}
              left={"1px"}
              padding={"2px"}
            />
            <Avatar
              size={"sm"}
              name="code beast "
              src="https://bit.ly/code-beast"
              position={"absolute"}
              top={"0px"}
              right={"-25px"}
              padding={"2px"}
            />
            <Avatar
              size={"sm"}
              name="ryan florence"
              src="https://bit.ly/ryan-florence"
              position={"absolute"}
              top={"30px"}
              left={"20px"}
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} ml={5} gap={1}>
          <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2}>
              <Text fontSize={"sm"}>@markzuckerberg</Text>
              <Image src="/public/verified.png" h={5} w={5} />
            </Flex>
            <Flex gap={2}>
              <Text color={"gray.light"} fontSize={"sm"}>
                1d
              </Text>
              <BsThreeDots size={"20px"} />
            </Flex>
          </Flex>
          <Text>this is my first post uploaded.</Text>
          <Box
            border={"1px solid "}
            borderColor={"gray.light"}
            borderRadius={6}
            overflow={"hidden"}
          >
            <Image src="/public/zuck-avatar.png" width={"full"} h={"300px"} />
          </Box>
          <Flex my={1} gap={1}>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>
          <Flex alignItems={"center"} gap={"2"}>
            <Text color={"gray.light"}>123 replies</Text>
            <Box w={1} h={1} borderRadius={6} bg={"gray.light"}></Box>
            <Text color={"gray.light"}>425 likes</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
