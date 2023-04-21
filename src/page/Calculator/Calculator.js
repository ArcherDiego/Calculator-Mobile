import React from "react"

import Display from "../../components/Display/Display"
import BasicButtons from "../../components/BasicButtons/BasicButtons"

import { Home, Logo, Header, Title } from "./style"

const Calculator = ({onLayout}) => {
    const [result, setResult] = React.useState(0)
    const [display, setDisplay] = React.useState(' ')

    return (
        <Home onLayout={ onLayout }>
            <Header>
                <Title>HP 10s+ Scientific Calculator</Title>
                <Logo source={require('../../assets/images/hpLogo.png')} />
            </Header>
            <Display display={ display } result={ result } />
            <BasicButtons
                display={ display }
                setDisplay={ setDisplay }
                result={ result }
                setResult={ setResult }
            />
        </Home>
    )
}

export default Calculator