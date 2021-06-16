import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface Props {
    
}

const SpikeLogo : FunctionComponent<Props> = ({}) => {
    return (
        <SpikeLogoContainer>
            <DiamondIcon />
            <span style={{fontWeight : 800}}>SPIKE </span><span style={{marginLeft : '.45rem'}}>slot</span>
        </SpikeLogoContainer>
    )
}

const SpikeLogoContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    color : white;
    font-size : 2rem;

    .diamond-icon-white{
        fill : white;
        height : 36px;
        margin-right : .5rem;
    }
`

const DiamondIcon : FunctionComponent<{}> = () => {
    return (
        <svg aria-hidden="true" focusable="false" className="diamond-icon-white" viewBox="0 0 576 512"><path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path></svg>
    )
}

export default SpikeLogo
