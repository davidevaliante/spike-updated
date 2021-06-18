import React, { CSSProperties, FunctionComponent } from 'react'
import styled from 'styled-components'
import { accentColor } from '../../theme/styled-components';
import config from '../../config.json'
import Row from '../general/Row'
import Image from 'next/image'

interface Props {
    style?: CSSProperties,
    icon?: JSX.Element
}

const PlayNowButton : FunctionComponent<Props> = ({style, icon, children}) => {
    return (
        <ButtonContainer style={style}>
            <Row>
                <p>{children}</p>
                <div style={{marginLeft : '1rem', marginTop : '.2rem'}}>
                    <Image width='22px' height='22px' src='/icons/right-arrow-white.svg'/>
                </div>
            </Row>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    padding : .4rem 2rem;    
    border : 0;
    font-family : ${config.fontName}, sans-serif;
    color : white;
    font-weight : 500;
    vertical-align : middle;

    border-radius : 35px;

    cursor: pointer;

    background-color : ${accentColor};
    box-shadow: 0px 0px 25px 4px ${accentColor};
`

export default PlayNowButton
