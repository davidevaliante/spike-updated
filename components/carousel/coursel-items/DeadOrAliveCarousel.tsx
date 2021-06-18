import React, { Fragment, FunctionComponent } from 'react'
import { appGrey, appGold, primary } from '../../../theme/styled-components'
import GetOfferButton from '../../buttons/GetOfferButton'
import PlayNowButton from '../../buttons/PlayNowButton'
import Header from '../../shared/Text/Header'
import Paragraph from '../../shared/Text/Paragraph'
import CarouselDimmer from './CarouselDimmer'
import Image from 'next/image'
import { carouselDesktopSize, FadeInFadeOutContainer } from './../Carousel';
import styled from 'styled-components'
import { laptop, tablet } from '../../../utils/Breakpoints'

interface Props {
    
}

const gonzoImageUrl = '/pics/dead-or-alive-carousel.jpg'

const GonzoCarouselItem : FunctionComponent<Props> = ({}) => {
    return (
        <FadeInFadeOutContainer>
            <GonzoStyleProvider>
                <Image width={1400} height={carouselDesktopSize.height} src={gonzoImageUrl}/>
                    
                <OfferContainer className='offer-container'>
                    <Header type={1} style={{fontSize : '2.3rem'}}>Offerta Esclusiva</Header>
                    <Paragraph style={{fontWeight : 600, color : appGrey, fontSize : '1.2rem'}}>Ricevi fino al 20% sul primo deposito</Paragraph>
                    <GetOfferButton style={{marginTop : '1.3rem'}} color={appGold}>Reclama il bonus</GetOfferButton>
                </OfferContainer>

                <CTAContainer>
                    <PlayNowButton>Provala Ora</PlayNowButton>
                </CTAContainer>

                <CarouselDimmer />
            </GonzoStyleProvider>
        </FadeInFadeOutContainer>
    )
}

const GonzoStyleProvider = styled.div`
    .offer-container {
        display : none;
    }

    ${laptop}{
        .offer-container{
            display : flex;
            flex-direction : column;
            align-items : center;
            cursor : pointer;
            opacity : 0;
            background-color : ${primary};
            border-radius : 16px;
            padding : 1rem 2rem;
            transition : opacity .6s ease;
            box-shadow: 0px 0px 20px 1px ${appGold};
            padding-bottom : 1.5rem;
        }

        :hover{
            .offer-container {
                opacity : 1;
                background-color : ${primary};
                border-radius : 16px;
                transition : opacity .6s ease;
            }
        }
    }   
`

const OfferContainer = styled.div`
    position : absolute;
    top : 10%;
    left : 20px;
    z-index : 3;
`

const CTAContainer = styled.div`
    display : none;

    ${tablet}{
        display : block;
    }

    position : absolute;
    top : 70%;
    right : 80px;
    z-index : 3;
`

export default GonzoCarouselItem
