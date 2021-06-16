import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties, FunctionComponent, useContext, useState } from 'react'
import styled from 'styled-components'
import { LocaleContext } from '../../../context/LocaleContext'
import BlogIcon from '../../icons/BlogIcon'
import FreeIcon from '../../icons/FreeIcon'
import HomeIcon from '../../icons/HomeIcon'
import LampIcon from '../../icons/LampIcon'
import MoneyIcon from '../../icons/MoneyIcon'
import PyramidIcon from '../../icons/PyramidIcon'
import SlotBarIcon from '../../icons/SlotBarIcon'
import SlotVlt from '../../icons/SlotVlt'
import VideoIcon from '../../icons/VideoIcon'
import Divider from '../Divider'
import { accentColor, appGrey } from './../../../theme/styled-components';

export interface INavbarItem {
    text : string
    link : string,
    open? : boolean,
    icon? : JSX.Element
    extra? : any,
    style?: CSSProperties
}

const NavBarItem : FunctionComponent<INavbarItem> = ({
    link,
    icon,
    text,
    open = false,
    style,
}) => {

    const router = useRouter()
    const {contextCountry} = useContext(LocaleContext)
    const [selected, setSelected] = useState(link === router.asPath)
    
    return (    
        <NavbarItemContainer style={style}>
            <Link href={link}>
                <LinkContentContainer>
                    <CollapsingContent selected={selected}>
                        {text}
                        {selected && <SelectedBar />}
                    </CollapsingContent> 
                </LinkContentContainer>
            </Link>
        </NavbarItemContainer>
    )
}

const SelectedBar = styled.div`
    width : 100%;
    height : 3px;
    background-color : ${accentColor};
    margin-top : 8px;
    border-radius : 75px;   
    box-shadow: 0px 0px 25px 6px ${accentColor};
`

const CollapsingContent = styled.div`
    vertical-align : middle;
    transition : opacity ease .4s;
    color : ${(props : { selected : boolean }) => props.selected ? 'white' : appGrey};
    font-weight : ${(props : { selected : boolean }) => props.selected ? 600 : 500};
`

const NavbarItemContainer = styled.div`
    cursor : pointer;
`

const LinkContentContainer = styled.div`
    padding : 1rem;
`

export const ItalianNavBarItems : INavbarItem[] = [
    {
        text : 'Home',
        link : '/',
        icon : <HomeIcon />
    },
    {
        text : 'Video',
        link : '/videos/it',
        icon : <VideoIcon />
    },
    {
        text : 'Giochi Gratuiti',
        link : '/slots/it',
        icon : <FreeIcon />
    },
    // {
    //     text : 'Slot da Bar',
    //     link : '/slot-bar/it',
    //     icon : <SlotBarIcon />
    // },
    // {
    //     text : 'Slot VLT',
    //     link : '/slot-vlt/it',
    //     icon : <SlotVlt/>
    // },
    {
        text : 'Bonus di benvenuto',
        link : '/migliori-bonus-casino',
        icon : <MoneyIcon />
    },
    {
        text : 'Book of Ra Online',
        link : '/slot/book-of-ra-deluxe/it',
        icon : <PyramidIcon />
    },
    {
        text : 'Guide e trucchi',
        link : '/guide-e-trucchi/it',
        icon : <LampIcon />
    },
    {
        text : 'Blog e articoli',
        link : '/blog/it',
        icon : <BlogIcon />
    },
]





export default NavBarItem
