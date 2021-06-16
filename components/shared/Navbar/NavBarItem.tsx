import Link from 'next/link'
import React, { CSSProperties, FunctionComponent } from 'react'
import styled from 'styled-components'
import Divider from '../Divider'

export interface INavbarItem {
    text : string
    link : string,
    open? : boolean,
    last? : boolean,
    icon? : JSX.Element
    extra? : any,
    style?: CSSProperties
}

const NavBarItem : FunctionComponent<INavbarItem> = ({
    link,
    icon,
    text,
    open = false,
    last = false,
    style,
}) => {
    return (    
        <NavbarItemContainer last={last} style={style}>
            <Link href={link}>
                <LinkContentContainer>
                    {icon}
                    <CollapsingContent open={open}>
                        {text}
                        {!last && <Divider style={{marginTop : '1rem'}}/>}
                    </CollapsingContent> 
                </LinkContentContainer>
            </Link>
        </NavbarItemContainer>
    )
}

const CollapsingContent = styled.div`
    display : none;
    width : 100%;
    opacity : 0;
    vertical-align : middle;
    transition : opacity ease .4s;
    

    ${(props : {open : boolean}) => {
        if(props.open){
            return `
                display : inline-block;
                color : white;
                cursor: pointer;
                margin-left : 1rem;
                opacity : 1;
            `
        }
    }}
`

const NavbarItemContainer = styled.div`
    cursor : pointer;
    margin-top : ${(props : { last : boolean }) => props.last ? 'auto' : '0px'};
    min-height : 80px;
`

const LinkContentContainer = styled.div`
    padding : 1rem;
`





export default NavBarItem
