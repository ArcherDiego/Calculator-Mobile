import React from "react"

import { Home } from "./style"

import Screen from "../../components/Screen/Screen"
import { StatusBar } from "expo-status-bar"

const Calculator = () => {
    return (
        <Home>
            <StatusBar style="dark" />
            <Screen />
        </Home>
    )
}

export default Calculator