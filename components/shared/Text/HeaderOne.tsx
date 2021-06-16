import React, { CSSProperties, FunctionComponent } from 'react'
import styled from 'styled-components'
import { appRed } from '../../../theme/styled-components'

interface Props {
    type : number
    style?:CSSProperties   
}

const Header : FunctionComponent<Props> = ({children, type, style}) => {
    switch(type){
        case 1:
            return <AppHeader1 style={style}>{children}</AppHeader1>
        
        case 2:
            return <AppHeader2 style={style}>{children}</AppHeader2>

        case 2:
            return <AppHeader3 style={style}>{children}</AppHeader3>

        default:
            return <AppHeader1 style={style}>{children}</AppHeader1>
    }
}

const AppHeader1 = styled.h1`
    color : ${appRed};
    /* font-weight : bold; */
    font-size : 2em;
    margin : 1rem 0rem;
`

const AppHeader2 = styled.h1`
    color : ${appRed};
    /* font-weight : bold; */
    font-size : 1.5em;
    margin : 1rem 0rem;
`

const AppHeader3 = styled.h1`
    color : ${appRed};
    /* font-weight : bold; */
    font-size : 1.17em;
    margin : 1rem 0rem;
`

export default Header
