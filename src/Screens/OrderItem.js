import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import products from "../Products";
import { Colors, Center } from 'react-native/Libraries/NewAppScreen'
import { Box, HStack, Pressable,FlatList, VStack } from 'native-base'

const OrderItem = () => {
  return (
  <FlatList showsVerticalScrollIndicator={false} data={products.slice(0,3)} keyExtractor={(item) => item._id} renderItem={({item}) => (
    <Pressable>
        <Box mb={3} >
            <HStack alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden">
                <Center w="25%" bg={Colors.deepGray}>
                    <Image source={{uri: DataTransfer.products}} alt={item.name} w="full" h={24} resizeMode="contain"/>
                </Center>
                <VStack w="60%" p={2}>
                    <Text isTruncated color={Colors.black} bold fontSize={12}>
                        {item.name}
                    </Text>
                </VStack>
            </HStack>
        </Box>
    </Pressable>
)}
/>
  );
};

export default OrderItem