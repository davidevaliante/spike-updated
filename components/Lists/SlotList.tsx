import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { accentColor, appBlue, appGrey } from '../../theme/styled-components'
import Header from '../shared/Text/Header'
import { appRed } from './../../theme/styled-components';
import { ApolloSlotCard } from './../../data/graphql/schema';
import SlotCard from './../cards/SlotCard';
import BigSlotCard from './../cards/BigSlotCard';
import config from '../../config.json'

interface Props {
    listHeader? : string
    scrollbarColor? : string
    slots : ApolloSlotCard[]
}

const Label = styled.p`

    font-family : ${config.fontName}, sans-serif;
    color : white;
    font-weight : 500;
    padding : .1rem 1rem;

    border-radius : 35px;

    cursor: pointer;

    background-color : ${accentColor};
    box-shadow: 0px 0px 25px 4px ${accentColor};
    box-sizing : border-box;
`

const SlotList : FunctionComponent<Props> = ({
    listHeader,
    scrollbarColor = appRed,
    slots
}) => {
    return (
        <div>
            {listHeader &&<div style={{display : 'flex', marginBottom : '2rem'}}>
                <Header style={{fontWeight : 500}} type={2} color={appGrey}>{listHeader}</Header>
            </div> }

            <ListContainer scrollbarColor={scrollbarColor}>
                <TwoTopGrid s1={slots[0]} s2={slots[1]} s3={slots[2]}/>
                <TwoBottomnGrid s1={slots[4]} s2={slots[5]} s3={slots[6]}/>    
                <TwoTopGrid s1={slots[7]} s2={slots[9]} s3={slots[8]}/>    

                {/* {slots.map(s => <SlotCard key={s.id} slot={s}/>)} */}
            </ListContainer>
        </div>
    )
}

interface ITopLeftGrid {
    s1 : ApolloSlotCard,
    s2 : ApolloSlotCard,
    s3 : ApolloSlotCard
}

const TwoTopGrid : FunctionComponent<ITopLeftGrid>= ({s1, s2, s3}) => {
    return (
        <Column className='grid-1'>
            <div className='tl-grid' style={{display : 'inline-block'}}>
                <SlotCard slot={s1}/>
                <SlotCard slot={s2}/>
            </div>
            <BigSlotCard slot={s3}/>
        </Column>
    )
}

const TwoBottomnGrid : FunctionComponent<ITopLeftGrid>= ({s1, s2, s3}) => {
    return (
        <Column className='grid-1'>
            <BigSlotCard style={{marginBottom : '.8rem'}} slot={s3}/>

            <div className='tl-grid' style={{display : 'inline-block'}}>
                <SlotCard slot={s1}/>
                <SlotCard slot={s2}/>
            </div>
        </Column>
    )
}

const TwoLeftGrid : FunctionComponent<ITopLeftGrid>= ({s1, s2, s3}) => {
    return (
        <Row>
            <div>
                <SlotCard slot={s1}/>
                <SlotCard slot={s2}/>
            </div>
            <BigSlotCard style={{marginBottom : '.8rem'}} slot={s3}/>
        </Row>
    )
}

const Row = styled.div`
    display : inline-flex;
`

const Column = styled.div`
    display : flex;
    flex-direction : column;

    .tl-grid{
        display : inline-flex;

        div:nth-child(1){
            margin-right : 1rem;
        }
    }

`



const ListContainer = styled.div`
    display : flex;
    width : 100%;
    justify-content : space-around;
    align-items : flex-start;
    flex-wrap : wrap;

    ::-webkit-scrollbar {
        width: 0.1rem;
        height : 8px;
        margin : 3rem;
    }

    ::-webkit-scrollbar-track{
        background : white;
    }

    ::-webkit-scrollbar-thumb{
        background : ${(props : {scrollbarColor : string}) => props.scrollbarColor};
        border-radius : 46px;
    }
`

export default SlotList
