import { Box,ScrollView,View, Text,Image, Heading, HStack, useAccessibleColors, Spacer, Button } from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Rating from "../Components/Rating"
import Review from "../Components/Review";

function SingleProductScreen() {
  const [value,setValue]= useState(0)
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image 
        source={require("../../assets/shoes.png" )}
        alt="Image"
        w="full"
        h={300}
        resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
        Nike Air Max Flyknit Racer
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput 
          value={value} 
          totalWidth={140} 
          totalHeight={30}
          iconSize={25} 
          step={1}
          maxValue={15}
          minValue={0}
          rounded
          textColor={Colors.black}
          iconStyle={{color:Colors.white}}
          rightButtonBackgroundColor={Colors.black}
          leftButtonBackgroundColor={Colors.black}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={16}>
        Paying homage to both heritage and innovation, the Nike Air Max Flyknit Racer goes beyond what's expected by blending an icon of the past with an icon of today. Incredibly light and stretchy Flyknit pairs with oh-so-soft cushioning for comfort you have to feel. Lace up and let your feet do the talking.
        </Text>
        <Button bg={Colors.black} color={Colors.white} mt={10}>
          ADD TO CART
        </Button>
        <Review/>
        </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
