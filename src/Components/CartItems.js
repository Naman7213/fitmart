import React from "react";
import { Text, View, Box, Pressable, HStack, Center } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../Products";
import { render } from "react-dom";

const Swiper = () => {
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey={0}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 2)}
    rendeerHiddenItems={renderHiddenItems}
    renderItem={renderItems}
    showsVerticalScrollIndicator={false}
  />;
};

const renderItems = (data) => {
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={COlors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Text>Items</Text>
      </HStack>
    </Box>
  </Pressable>;
};

const renderHiddenItems = () => {
  <Pressable
    w={50}
    roundedBottomRight={10}
    h="80%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>;
};

const CartItems = () => {
  return (
    <Box>
      <Swiper />
    </Box>
  );
};

export default CartItems;
