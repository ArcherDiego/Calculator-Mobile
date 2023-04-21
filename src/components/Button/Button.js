import React from "react"

import { BtnStyle, BtnTextStyle } from "./style"

const Button = ({ children, onPress }) => {
    return(
        <BtnStyle onPress={ onPress }>
            <BtnTextStyle>{ children }</BtnTextStyle>
        </BtnStyle>
    )
}

export default Button
