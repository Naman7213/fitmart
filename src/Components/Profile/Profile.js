import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import React from "react";
import Colors from "../../color";

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "text",
  },
  {
    label: "PASSWORD",
    type: "text",
  },
];

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView shows VerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderWidth={0}
                bg={Colors.subGreen}
                py={4}
                type={i.type}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          {/* <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              USERNAME
            </FormControl.Label>
            <Input
              borderWidth={0}
              bg={Colors.subGreen}
              py={3}
              color={Colors.main}
              fontSize={15}
              _focus={{
                bg: Colors.subGreen,
                borderColor: Colors.main,
                borderWidth: 1,
              }}
            />
          </FormControl> */}
        </VStack>
      </ScrollView>
    </Box>
  );
};
export default Profile;
