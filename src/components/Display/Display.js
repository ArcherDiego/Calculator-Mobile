import React from "react"

import { CountLine, LcdDisplay, ResultLine } from "./style"

const Display = ({display, result}) => {
    return( 
        <LcdDisplay>
            <CountLine>{ display }</CountLine>
            <ResultLine>{ result }</ResultLine>
        </LcdDisplay>
    )
}

export default Display
