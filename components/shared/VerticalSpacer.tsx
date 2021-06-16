import React from 'react'
import { FunctionComponent, CSSProperties } from 'react';

interface Props {
    space? : number,
    style?: CSSProperties
}

const VerticalSpacer : FunctionComponent<Props> = ({ space = 40, style}) => <div style={{height : `${space}px`, ...style}} />

export default VerticalSpacer
