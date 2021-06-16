import React, { CSSProperties, FunctionComponent } from 'react'
import styled from 'styled-components'
import { appRed } from '../../../theme/styled-components'

interface Props {
    type : number,
    color?: string,
    style?:CSSProperties   
}

const Header : FunctionComponent<Props> = ({
    children, 
    type, 
    color = 'white', 
    style
}) => {
    switch(type){
        case 1:
            return <AppHeader1 color={color} style={style}>{children}</AppHeader1>
        
        case 2:
            return <AppHeader2 color={color} style={style}>{children}</AppHeader2>

        case 3:
            return <AppHeader3 color={color} style={style}>{children}</AppHeader3>

        default:
            return <AppHeader1 color={color} style={style}>{children}</AppHeader1>
    }
}

const AppHeader1 = styled.h1`
    color : ${(props : {color : string}) => props.color};
    /* font-weight : bold; */
    font-size : 2em;
    margin : 1rem 0rem;
    font-weight : 700;
    font-size : 3rem;
`

const AppHeader2 = styled.h2`
    color : ${(props : {color : string}) => props.color};    
    /* font-weight : bold; */
    font-size : 1.5em;
    margin : 1rem 0rem;
`

const AppHeader3 = styled.h3`
    color : ${(props : {color : string}) => props.color};    
    /* font-weight : bold; */
    font-size : 1.17em;
    margin : 1rem 0rem;
`

export default Header
