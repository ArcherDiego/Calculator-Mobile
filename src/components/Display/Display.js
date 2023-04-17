import React from "react"

import { CountLine, LcdDisplay, ResultLine } from "./style"

const Display = () => {
    return( 
        <LcdDisplay>
            <CountLine>8.3/1600</CountLine>
            <ResultLine>0.0051875</ResultLine>
        </LcdDisplay>
    )
}

export default Display
