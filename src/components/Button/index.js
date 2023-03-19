import React from "react"
import { Pressable, Text } from "react-native"

const Button = ({ children }) => {
    return(
        <Pressable>
            <Text>{ children }</Text>
        </Pressable>
    )
}

export default Button
