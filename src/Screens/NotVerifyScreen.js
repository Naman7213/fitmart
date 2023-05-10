import { View, Text, Box, Center, Image, VStack,Button } from "native-base";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg="#48B600" safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require("../../assets/favicon.png")} alt="Logo" size="lg"/>
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Button bg={Colors.black} >Register</Button>
        <Button bg={Colors.black} >Login</Button>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
