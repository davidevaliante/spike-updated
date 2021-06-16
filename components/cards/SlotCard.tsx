import React, { Fragment, FunctionComponent } from 'react'
import { ApolloSlotCard } from '../../data/graphql/schema'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
    slot : ApolloSlotCard
}

const SlotCard : FunctionComponent<Props> = ({slot}) => {

    return (
        <SlotCardContainer>
            <SlotImage  width={250} height={152} src={slot.image.url} />
        </SlotCardContainer>
    )
}

const SlotCardContainer = styled.div`
    display : inline-block;
    border-radius : 8px;
    cursor : pointer;
`

const SlotImage = styled(Image)`
    border-radius : 8px;
`

export default SlotCard
