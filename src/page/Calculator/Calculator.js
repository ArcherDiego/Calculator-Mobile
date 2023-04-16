import React from "react"

import Display from "../../components/Display/Display"

import { Home, Logo, Header, Title } from "./style"

const Calculator = ({onLayout}) => {
    return (
        <Home onLayout={ onLayout }>
            <Header>
                <Title>HP 10s+ Scientific Calculator</Title>
                <Logo source={require('../../assets/images/hpLogo.png')} />
            </Header>
            <Display />
        </Home>
    )
}

export default Calculator