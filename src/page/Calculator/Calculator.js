import React from "react"

import Display from "../../components/Display/Display"
import BasicButtons from "../../components/BasicButtons/BasicButtons"

import { Home, Logo, Header, Title } from "./style"

const Calculator = ({onLayout}) => {
    return (
        <Home onLayout={ onLayout }>
            <Header>
                <Title>HP 10s+ Scientific Calculator</Title>
                <Logo source={require('../../assets/images/hpLogo.png')} />
            </Header>
            <Display />
            <BasicButtons />
        </Home>
    )
}

export default Calculator