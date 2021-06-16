import React, { CSSProperties, FunctionComponent } from 'react'
import styled from 'styled-components'
import { accentColor, primary } from '../../theme/styled-components';
import config from '../../config.json'
import Row from '../general/Row'
import Image from 'next/image'
import { primaryDark } from './../../theme/styled-components';

interface Props {
    style?: CSSProperties,
    icon?: JSX.Element,
    color? : string
}

const GetOfferButton : FunctionComponent<Props> = ({style, icon, color = primaryDark, children}) => {
    return (
        <ButtonContainer color={color} style={style}>
            <Row>
                <p>{children}</p>
                <div style={{marginLeft : '1rem', marginTop : '.2rem'}}>
                    <Image width='26px' height='26px' src='/icons/coin.svg'/>
                </div>
            </Row>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`

    padding : .8rem 2rem;    
    border : 0;
    font-family : ${config.fontName}, sans-serif;
    color : white;
    font-weight : 500;
    vertical-align : middle;

    border-radius : 35px;

    cursor: pointer;

    background-color : ${(props : {color : string}) => props.color};
`

export default GetOfferButton
