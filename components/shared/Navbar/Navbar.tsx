import React, { Fragment, FunctionComponent, useContext } from 'react'
import styled from 'styled-components'
import { appGreen, appRed, appRedDisabled, darkBg, appGreenDisabled, appYellowDisabled, appYellow, appBlue, appBlueDisabled } from '../../../theme/styled-components';
import { LocaleContext } from '../../../context/LocaleContext';
import HomeIcon from '../../icons/HomeIcon';
import VideoIcon from '../../icons/VideoIcon'
import FreeIcon from '../../icons/FreeIcon'
import SlotBarIcon from '../../icons/SlotBarIcon'
import SlotVlt from '../../icons/SlotVlt'
import MoneyIcon from '../../icons/MoneyIcon'
import PyramidIcon from '../../icons/PyramidIcon'
import LampIcon from '../../icons/LampIcon'
import BlogIcon from '../../icons/BlogIcon'
import { useState } from 'react';
import { OnlyMobile, tablet } from '../../../utils/Breakpoints'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import NavBarItem, { INavbarItem } from './NavBarItem';

interface Props {
    
}


const Navbar : FunctionComponent<Props> = () => {

    const {t, contextCountry} = useContext(LocaleContext)

    const [open, setOpen] = useState(false)

    
    const countryToNavbarItems = () => {
        switch(contextCountry){
            default :
                return ItalianNavBarItems.map((item, i) => renderNavbarItem(item, i == ItalianNavBarItems.length-1))
        }
    }

    const renderNavbarItem = (item : INavbarItem, last : boolean) => <NavBarItem key={item.text} open={open} last={last} {...item}/>
       
    return (
        <Fragment>
            <IconsTransitionProvider open={open} onMouseOver={() => !open && setOpen(true)} onMouseLeave={() => open && setOpen(false)}>
                <DesktopNavbar open={open}>
                    {countryToNavbarItems()}
                </DesktopNavbar>
            </IconsTransitionProvider>

            <OnlyMobile>
                <MobileNavbar>
                    <Image width='36px' height='36px' src='/icons/search-icon-white.svg' />
                    <Hamburger direction="left" color='#fff' hideOutline={true} onToggle={toggled => {setOpen(!open)}}/>
                </MobileNavbar>
            </OnlyMobile>
        </Fragment>
    )
}

const iconTransitionTime = '1s'

const DesktopNavbar = styled.nav`
    display : ${(props : { open : boolean }) => props.open ? 'flex' : 'none'};
    position : fixed;
    overflow-y : scroll;
    overflow-x : hidden;
    white-space : nowrap; 
    z-index : 10;

    flex-direction : column;

    width : 75vw;
    height : 100vh;

    background : ${darkBg};
    transition : width, ease, .3s;


    ${tablet}{
        display : flex;
        overflow-y : hidden;

        width : ${(props : { open : boolean }) => props.open ? '18rem' : '5rem'};

        background : ${darkBg};

        padding-right : ${(props : { open : boolean }) => props.open ? '7rem' : '0rem'};
    }
`

const MobileNavbar = styled.nav`
    display : flex;
    justify-content : space-between;
    align-items : center;

    height : 66px;
    padding : 0rem .5rem;

    background : ${darkBg};
`

const IconsTransitionProvider = styled.div`
    
    .home-icon{
        height : 46px;
        fill : ${appRedDisabled};
        transition : fill, ease ${iconTransitionTime};
        vertical-align : middle;
    }

    .video-icon{
        height : 46px;
        fill : ${appGreenDisabled}; 
        transition : fill, ease ${iconTransitionTime};
        vertical-align : middle;
    }

    .free-icon{
        height : 46px;
        fill : ${appYellowDisabled}; 
        transition : fill, ease ${iconTransitionTime};
        vertical-align : middle;
    }

    .bar-icon{
        height : 46px;
        fill : ${appBlueDisabled}; 
        transition : fill, ease ${iconTransitionTime};
        vertical-align : middle;
    }

    .vlt-icon{
        height : 46px;
        fill : ${appRedDisabled}; 
        transition : fill, ease ${iconTransitionTime};
        vertical-align : middle;
    }

    .money-icon{
        height : 46px;
        fill :#d1930f; 
        transition : fill, ease ${iconTransitionTime};
        vertical-align : middle;
    }

    .bor-icon{
        height : 46px;
        fill :#9a0acf; 
        transition : fill, ease 2s;
        vertical-align : middle;
    }

    .lamp-icon{
        height : 46px;
        fill :#227be0; 
        transition : fill, ease 2s;
        vertical-align : middle;
    }

    .blog-icon{
        height : 46px;
        fill :#04ba80; 
        transition : fill, ease 2s;
        vertical-align : middle;
    }

    ${(props : { open : boolean }) => props.open && `
        .home-icon{
            fill: ${appRed};
        }

        .video-icon{
            fill: ${appGreen};
        }

        .free-icon{
            fill: ${appYellow};
        }

        .bar-icon{
            fill: ${appBlue};
        }

        .vlt-icon{
            fill: ${appRed};
        }

        .money-icon{
            fill: #ffca1c;
        }

        .bor-icon{
            fill: #be3eed;
        }

        .lamp-icon{
            fill: #4095f5;
        }

        .blog-icon{
            fill: #1aeba8;
        }
    `}
`

const ItalianNavBarItems : INavbarItem[] = [
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
    {
        text : 'Slot da Bar',
        link : '/slot-bar/it',
        icon : <SlotBarIcon />
    },
    {
        text : 'Slot VLT',
        link : '/slot-vlt/it',
        icon : <SlotVlt/>
    },
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
    {
        text : 'Home',
        link : '/',
        icon : <HomeIcon />
    },
]

export default Navbar
