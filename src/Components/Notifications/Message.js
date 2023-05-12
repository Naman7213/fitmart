import {Text, Center } from "native-base";
import React from "react";



function Message({bg,color,size,children,bold}){
    return(
        <Center bg={bg} p={4} rounded={5} >
            <Text color={color} fontSize={size} bold={bold}>
                {children}
            </Text>
        </Center>
    )
}
export default Message