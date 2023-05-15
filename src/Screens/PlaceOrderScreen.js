import React,{Component} from "react";
import { View, Text, Box, ScrollView, Heading } from "native-base";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import { FontAwesome, FontAwesome5, Ionicons} from "@expo/vector-icons"

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
        >
          <OrderInfo
          title="CUSTOMER" 
          subTitle="Admin" 
          text="admin@example.com" 
          icon={
          <FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo 
          title="SHIPPING INFO" 
          subTitle="Shipping: India" 
          text="Pay Method: PayPal" 
          icon={
          <FontAwesome5 name="shipping-fast" size={30} color={Colors.white}/>} 
          />
          <OrderInfo 
          title="DELIVER TO" 
          subTitle="Address:" 
          text="Chitkara University, Punjab" 
          icon={
          <Ionicons name="location-sharp" size={30} color={Colors.white}/>} 
          />
        </ScrollView>
      </Box>
      {/* Order Item*/}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>PRODUCTS
        </Heading> 
        <OrderItem />
        {/* Total */}
      <PlaceOrderModel />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
