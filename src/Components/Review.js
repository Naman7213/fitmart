import { Text, Box, Heading } from "native-base";
import React from "react";
import Colors from "../color";
import Rating from "./Rating";
import Message from "../Components/Notifications/Message"

export default function Review() {
    return(
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* {IF THERE IS NO REVIEW} */}
            <Message 
            color={Colors.deepGray} 
            bg={Colors.main} 
            size={10} 
            children={"NO review"} />

            {/* REVIEW */}
            <Box p={3} bg={Colors.gray} mt={5} rounded={5}>
            <Heading fontSize={15} color={Colors.black}>
                User Doe
            </Heading>
            <Rating value={4}/>
            <Text fontSize={11} my={2}>Jan 12 2023</Text>
            <Message 
            color={Colors.black} 
            bg={Colors.white} 
            size={10} 
            children={"NO review"} 
            />
            </Box>
        </Box>
    )
}