import React from 'react'
import { FunctionComponent } from 'react';
import { CSSProperties } from 'styled-components'
import styled from 'styled-components'
import Link from 'next/link';
import { appBlue } from './../../../theme/styled-components';

interface Props {
    href : string
    style?:CSSProperties,
}

const AnchorText : FunctionComponent<Props> = ({ href, children, style }) => {
    return (
        <StyledAnchorText href={href}>{children}</StyledAnchorText>
    )
}

const StyledAnchorText = styled.a`
    color : #1287db ;
    text-decoration : underline;
    font-weight : bold;
` 

export default AnchorText
