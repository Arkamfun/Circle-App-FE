import { Box, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { ReplyEntity } from "../../../entities/reply-Entity";
export function StatusCards({ data }: { data: ReplyEntity }) {
  return (
    <>
      <Box
        className="comments"
        display={"flex"}
        gap={5}
        borderBottom={"1px"}
        borderColor={"grey"}
        pb={5}
      >
        <Box w={"60px"} h={"60px"}>
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            w={"100%"}
            h={"100%"}
            borderRadius={"50%"}
            objectFit={"cover"}
          ></Image>
        </Box>
        <Box
          className="Status"
          cursor={"pointer"}
          display={"flex"}
          flexDirection={"column"}
          w={"100%"}
        >
          <Box display={"flex"} gap={2}>
            <Text as={"p"} fontWeight={"bold"} color={"white"}>
              Indah Pra Karya{" "}
            </Text>
            <Text as={"p"} fontWeight={"light"} color={"grey"}>
              @indahpra
            </Text>
            <Text as={"p"} fontWeight={"bold"} color={"grey"}>
              .
            </Text>
            <Text as={"p"} fontWeight={"light"} color={"grey"}>
              {" "}
              4h
            </Text>
          </Box>
          <Box>
            <Text as={"p"} color={"white"}>
              {data?.content}
            </Text>
          </Box>
          <Box display={"flex"} my={3} alignItems={"center"} gap={2}>
            <FaHeart color="red" />
            <Text as={"p"} color={"grey"}>
              125
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
