import React from "react"

import { ScreenStyle, Numbers } from "./style"
import Card from "../Card/Card"

const Screen = () => {
    return (
        <>
            <ScreenStyle>
                <Numbers>0</Numbers>
            </ScreenStyle>
            <Card />
        </>
    )
}

export default Screen
