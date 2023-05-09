import React from "react";
import {
  Box,
  View,
  Text,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from "native-base";
import { Colors } from "../color";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function RegisterScreen() {
  return (
    <Box flex={1} bg="#000000">
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/bg_login.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading color="#48B600">SIGN UP</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color="#48B600" />
            }
            variant="underlined"
            placeholder="jhondoe"
            w="70%"
            pl={2}
            color="#000000"
            borderBottomColor="#E5E5E5"
          />
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color="#48B600" />
            }
            variant="underlined"
            placeholder="johndoe@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color="#000000"
            borderBottomColor="#E5E5E5"
          />
          <Input
            InputLeftElement={<Ionicons name="eye" size={20} color="#48B600" />}
            variant="underlined"
            placeholder="*******"
            type="password"
            w="70%"
            pl={2}
            color="#000000"
            borderBottomColor="#E5E5E5"
          />
        </VStack>
        <Button
          my={30}
          w="40%"
          rounded={50}
          bg="#48B600"
          _pressed={{ bg: "#48B600" }}
          _text={{ color: "#FFFFFF" }}
          
        >
          SIGN UP
        </Button>
        <Pressable mt={4}>
          <Text color="#C4C4C4">LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
