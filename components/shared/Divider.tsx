import React, { FunctionComponent } from 'react'
import styled, { CSSProperties } from 'styled-components'

interface Props {
    orientation? : 'vertical' | 'horizontal',
    color? : string,
    thickness? : number,
    style? : CSSProperties
}

const Divider : FunctionComponent<Props> = ({
    orientation = 'horizontal',
    color = '#fff',
    thickness = 1,
    style
}) => {
    return (
        <div style={{
            width : orientation === 'vertical' ? thickness : '100%',
            height : orientation === 'horizontal' ? thickness : '100%',
            backgroundColor : color,
            ...style
        }}/>
    )
}

export default Divider
