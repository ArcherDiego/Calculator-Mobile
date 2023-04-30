import React from "react"

import Button from "../Button/Button"

import { GridView } from "./style"

const BasicButtons = ({ display, setDisplay, result, setResult }) => {
    const BtnText = ['7', '8', '9', 'AC', 'DEL', '4', '5', '6', 'x', '÷', '1', '2', '3', '+', '-', '0', '.', 'EXP', 'Ans', '=']
    
    const handlePress = (text) => {
        const arr = []
        
        if(text == '+'){

        }
        arr.push(...display, text)
        setDisplay(arr)
    }

    return (
        <GridView>
            {BtnText.map((text, index) => (
                <Button key={ index } onPress={ () => handlePress(text) }>{ text }</Button>
            ))}
        </GridView>
    )
}

export default BasicButtons
