import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { accentColor, appGrey, primary } from '../../theme/styled-components'
import Image from 'next/image'
import PlayNowButton from '../buttons/PlayNowButton'
import Header from '../shared/Text/Header'
import Paragraph from './../shared/Text/Paragraph';
import GetOfferButton from '../buttons/GetOfferButton'
import { appYellow, appGold } from './../../theme/styled-components';
import { tablet } from '../../utils/Breakpoints'
import { laptop } from './../../utils/Breakpoints';

interface Props {
    
}

const imageOne = '/pics/gonzos-quest-carousel.jpg'
const imagetwo = '/pics/gonzo-slot-2.jpg'

const desktopSize = {width : '100%', height : '700px'}

const Carousel : FunctionComponent<Props> = ({}) => {

    return (
        <CarouselWrapper>
            <CarouselContainer>
                <Image width={1400} height={desktopSize.height} src={imagetwo} quality={100}/>
                
                <OfferContainer className='offer-container'>
                    <Header type={1} style={{fontSize : '2.3rem'}}>Offerta Esclusiva</Header>
                    <Paragraph style={{fontWeight : 600, color : appGrey, fontSize : '1.2rem'}}>Ricevi fino al 20% sul primo deposito</Paragraph>
                    <GetOfferButton style={{marginTop : '1.3rem'}} color={appGold}>Reclama il bonus</GetOfferButton>
                </OfferContainer>

                <CTAContainer>
                    <PlayNowButton>Provala Ora</PlayNowButton>
                </CTAContainer>

                <Dimmer className='dimmer'/>

            </CarouselContainer>

            <ControlsContainer>
                <Image width={30} height={30} src='/icons/left-chevron.svg' />
                <Image width={30} height={30} src='/icons/right-chevron.svg' />
            </ControlsContainer>
        </CarouselWrapper>

    )
}

const ControlsContainer = styled.div`
    display : flex;
    justify-content : space-around;
    min-width : 150px;

    img{
        cursor : pointer;
    }
`

const Dimmer = styled.div`
    
`

const CarouselWrapper = styled.div`
    .dimmer{
        opacity : 0; 
    }

    .offer-container {
        display : none;
    }

    ${laptop}{
        .dimmer{
            position : absolute;
            top : 0;
            left : 0;
            opacity : 0;

            width : 100%;
            height : 100%;
            z-index : 2;

            background-color : ${primary};
            transition : opacity .6s ease;     
        }

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
            .dimmer{
                opacity : .7;
            }

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

const CarouselContainer = styled.div`
    cursor : pointer;
    position : relative;
    width : ${desktopSize.width};
    background-color : ${primary};
    margin-top : 1rem;   
`


export default Carousel
