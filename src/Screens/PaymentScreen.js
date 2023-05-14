import { View, Text } from "native-base";
import React from "react";

import {
  Box,
  Center,
  FormControl,
  ScrollView,
  Text,
  Input,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
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
            <HStack
              alignItems="center"
              bg={Colors.white}
              px={3}
              py={1}
              justifyContent=
              rounded={10}
            >
              <Box>
                <Image
                  source={require("../../assets/images/paypal.png")}
                  alt="paypal"
                  resizeMode="contain"
                  W={60}
                  h={50}
                />
              </Box>{" "}
              I
            </HStack>

            <Buttone bg={Colors.main} color={Colors.white} mt={5}>
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
