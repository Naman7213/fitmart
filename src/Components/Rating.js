import { HStack,text,Text } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../color";
import products from "../Products";
function Rating({value,text}){
    const size=14
    return(
        <HStack space={0.4} mt={1} alignItems="center">
            < MaterialIcons name={value>=1?"star":value>=0.5?"star-half": "star-outline"} 
            color={Colors.orange} 
            size={size}/>
            < MaterialIcons name={value>=2?"star":value>=1.5?"star-half": "star-outline"} 
            color={Colors.orange} 
            size={size}/>
            < MaterialIcons name={value>=3?"star":value>=2.5?"star-half": "star-outline"} 
            color={Colors.orange} 
            size={size}/>
            < MaterialIcons name={value>=4?"star":value>=3.5?"star-half": "star-outline"} 
            color={Colors.orange} 
            size={size}/>
            < MaterialIcons name={value>=5?"star":value>=4.5?"star-half": "star-outline"} 
            color={Colors.orange} 
            size={size}/>
            {text &&(
            <Text fontSize={12} ml={2}>
                {text}
            </Text>
            )}
        </HStack>
    )
}

export default Rating