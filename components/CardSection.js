import { MdCheckCircle } from "react-icons/md";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import BenefitsSection from "./BenefitsSection";
import { benefitsData, pricingData } from "./data";

export default function CardSection() {
  return (
    <Box
      w={["92%", "70%"]}
      mx={"auto"}
      bg={"white"}
      borderRadius={"10px"}
      pb={[10, "unset"]}
    >
      <Flex
        flexDirection={["column", "row"]}
        align={"center"}
        justify={"center"}
        borderRadius={["10px"]}
        boxShadow={[
          "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
        ]}
      >
        {/* Card Left Section */}
        <Card
          align="center"
          flex={["1", "0.4"]}
          w={["100%", "unset"]}
          bg={"#f3f3f3"}
          py={"5"}
        >
          <CardBody align="center">
            <Heading fontSize={22} fontWeight={"800"}>
              Premium PRO
            </Heading>
            <Heading size="3xl" my={"4"} fontWeight={"800"}>
              $329
            </Heading>
            <Text fontWeight={500} fontSize={"18px"}>
              billed just once
            </Text>
          </CardBody>
          <CardFooter w={"100%"} mt={"0"}>
            <Button
              bg="#805AD5"
              color={"white"}
              w={"80%"}
              mx={"auto"}
              borderRadius={"5px"}
              fontSize={"16px"}
              height={"45px"}
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>

        {/* Card Right Section */}
        <Box
          flex={"0.6"}
          bg={"white"}
          p={["3", "7"]}
          pb={["10", "unset"]}
          pt={["3", "2"]}
          fontSize={["16px", "18px"]}
          borderRadius={"3xl"}
        >
          <Text mb={["7", "5"]} mt={["8", "unset"]}>
            Access these features when you get this pricing package for your
            business.
          </Text>

          {/* Pricing Data Mapped */}
          <List spacing={[4, 3]}>
            {Object.values(pricingData).map((text, index) => (
              <ListItem key={index}>
                <ListIcon
                  as={MdCheckCircle}
                  color="#6B46C1"
                  fontSize={["xl", "2xl"]}
                  mr={["1", "2"]}
                />
                {text}
              </ListItem>
            ))}
          </List>
          {/* ------------------------ */}
        </Box>
      </Flex>

      {/* Benefits Section Data Mapped */}
      <Wrap mt={12} justify={["flex-start", "space-around"]}>
        {benefitsData?.map((data) => (
          <WrapItem gap={5}>
            {/* BenefitsSection Component Rendered */}
            <BenefitsSection icon={data.icon} text={data.text} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
