import React, { FunctionComponent } from 'react'
import { CSSProperties } from 'styled-components';
import styled from 'styled-components'

interface Props {
    style? : CSSProperties
}

const Paragraph : FunctionComponent<Props> = ({style, children}) => {
    return (
        <AppParagraph style={style}>{children}</AppParagraph>
    )
}

const AppParagraph = styled.p`
    line-height : 1.5rem;
`

export default Paragraph
