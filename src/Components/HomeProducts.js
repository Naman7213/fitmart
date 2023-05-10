import { Flex, ScrollView, Text , Image} from "native-base";
import React from "react";
import products from "../Products"
import { Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function HomeProducts(){
    return(
        <ScrollView flex={1}>
            <Flex 
            flexWrap="wrap" 
            direction="row" 
            justifyContent="space-between"
            px={6}
            >
                {products.map((product)=>(
                        <Pressable 
                        key={product.id} 
                        w="47%" 
                        bg={Colors.white} 
                        rounded="md" 
                        shadow={2} 
                        pt={0.3} 
                        my={3} 
                        pb={2} 
                        overflow="hidden"
                        >
                            <Image 
                            source={{uri:product.image}} 
                            alt={product.name} 
                            w="full" 
                            h={24} 
                            resizeMode="contain"
                            ></Image>
                        </Pressable>
                    ))}
            </Flex>
        </ScrollView>
    )
}
export default HomeProducts;