import React from "react"

import { BtnStyle, BtnTextStyle } from "./style"

const Button = ({ children }) => {
    return(
        <BtnStyle>
            <BtnTextStyle>{ children }</BtnTextStyle>
        </BtnStyle>
    )
}

export default Button
