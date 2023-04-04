import React from "react"

import { Text } from "react-native"

import { BtnStyle } from "./style"

const Button = ({ children }) => {
    return(
        <BtnStyle>
            <Text>{ children }</Text>
        </BtnStyle>
    )
}

export default Button
