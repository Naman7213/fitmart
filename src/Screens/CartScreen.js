import React from "react";
import { View, Text, Box, Center, ScrollView } from "native-base";
import { Colors } from "react-native/Libraries/NewAppScreen";
// import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* IF CART IS EMPTY */}
      {/* <CartEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartIterms />
        /* buttons */{"}"}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="center"
            bg={Colors.white}
            shadow={2}
            W="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $356
            </Button>
          </HStack>
        </Center>
        {/* Checkout */}
        <Center px={5}>
          <Buttone bg={Colors.black} color={Colors.white} mt={10}>
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
