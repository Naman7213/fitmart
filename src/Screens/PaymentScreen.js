import {
  Box,
  Center,
  FormControl,
  ScrollView,
  Text,
  Input,
  VStack,
  HStack,
  Spacer,
  View,
  Image,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
const paymentMethodes = [
  {
    image: require("../../assets/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/discover.png"),
    alt: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/googlepay.png"),
    alt: "googlepay",
    icon: "fontAwesome",
  },
];

function PaymentScreen() {
  return (
    // <View>
    //   <Text>PaymentScreen</Text>
    // </View>
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          Payment Method
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView shows VerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethodes.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={9}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={i.image}
                    alt={i.alt}
                    resizeMode="contain"
                    W={60}
                    h={50}
                  />
                  <Spacer />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}

            <Buttone bg={Colors.main} color={Colors.white} mt={5}>
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
              Payment Method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
