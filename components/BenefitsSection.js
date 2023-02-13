import { Flex, Image, Text } from "@chakra-ui/react";

export default function BenefitsSection({ icon, text }) {
  return (
    <Flex align={"center"} justify={"center"} w={["", "60"]} gap={5}>
      <Image
        src={icon}
        w={["7", "8"]}
        h={["7", "8"]}
        alt="Icon"
        borderRadius={"full"}
      />
      <Text fontSize={["16px"]} fontWeight={"bold"}>
        {text}
      </Text>
    </Flex>
  );
}
