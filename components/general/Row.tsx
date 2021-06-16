import React, { CSSProperties, FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
    style?: CSSProperties
}

const Row : FunctionComponent<Props> = ({style, children}) => {
    return (
        <BasicRow style={style}>
            {children}
        </BasicRow>
    )
}

const BasicRow = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

export default Row
