import {
  Text,
  Box,
  Heading,
  VStack,
  FormControl,
  CheckIcon,
  TextArea,
} from "native-base";
import { Select } from "native-base";
import Buttone from "./Buttone";
import React from "react";
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Notifications/Message";
import { CheckBox } from "react-native-web";
import { useState } from "react";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* {IF THERE IS NO REVIEW} */}
      {/* <Message
        color={Colors.deepGray}
        bg={Colors.main}
        bold
        children={"NO review"}
      /> */}

      {/* REVIEW */}
      <Box p={3} bg={Colors.gray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text fontSize={11} my={2}>
          Jan 12 2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "NativeBase Icons was designed to make integration of icons in native base"
          }
        />
      </Box>
      {/* {Write Rivew} */}
      {/* <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1- Poor" value="1" />
              <Select.Item label="2- Fair" value="2" />
              <Select.Item label="3- Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This product is good..."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            Submit
          </Buttone>
          <Message
            color={Colors.white}
            bg={Colors.black}
            children={"Please 'Login' to write a review"}
          />
        </VStack>
      </Box> */}
    </Box>
  );
}
