import { Box, Heading, Flex, ScrollView, Text , Image, ImageBackground, View} from "native-base";
import React from "react";
import products from "../Products"
import { Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Rating from "./Rating";

function HomeProducts(){
    return(
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex 
            flexWrap="wrap" 
            direction="row" 
            justifyContent="space-between"
            px={6}
            >
                {products.map((product)=>(
                        <Pressable 
                        key={product._id} 
                        w="47%" 
                        bg={Colors.white} 
                        rounded="md" 
                        shadow={2} 
                        pt={0.3} 
                        my={3} 
                        pb={2} 
                        overflow="hidden"
                        >
                            <View style={{flex:1}}>
                            <Image 
                            source={{uri:product.image}} 
                            alt={product.name} 
                            w="full" 
                            h={24} 
                            resizeMode="contain"
                            />
                            
                            <Box px={6} pt={1}>
                            

                                <Heading size="sm" bold color={Colors.white}>
                                    ${product.price}
                                </Heading>
                                <Text fontSize={10} mt={1} isTruncated w="full" color={Colors.white}>
                                    {product.name}
                                </Text>
                                {/* rating */}
                                <Rating value={product.rating}/>
                                    
                            </Box>  
                                
                            
                            </View>
                            
                        </Pressable>
                    ))}
            </Flex>
        </ScrollView>
    )
}
export default HomeProducts;