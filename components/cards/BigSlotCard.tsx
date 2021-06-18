import React, { CSSProperties, Fragment, FunctionComponent } from 'react'
import { ApolloSlotCard } from '../../data/graphql/schema'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
    style?: CSSProperties
    slot : ApolloSlotCard
}

const BigSlotCard : FunctionComponent<Props> = ({slot, style}) => {

    return (
        <SlotCardContainer style={style}>
            <SlotImage  width={416} height={416} src={slot.image.url} />
        </SlotCardContainer>
    )
}

const SlotCardContainer = styled.div`
    display : inline-block;
    border-radius : 8px;
    cursor : pointer;
    
    img{
        object-fit : cover;
    }
`

const SlotImage = styled(Image)`
    border-radius : 8px;
`

export default BigSlotCard
