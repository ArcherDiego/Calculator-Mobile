import React from "react"

import Button from "../Button/Button"

import { GridView } from "./style"

const BasicButtons = () => {
    const BtnText = ['7', '8', '9', 'AC', 'DEL', '4', '5', '6', 'x', '÷', '1', '2', '3', '+', '-', '0', '.', 'EXP', 'Ans', '=']

    return (
        <GridView>
            {BtnText.map((text) => (
                <Button key={ text }>{ text }</Button>
            ))}
        </GridView>
    )
}

export default BasicButtons
