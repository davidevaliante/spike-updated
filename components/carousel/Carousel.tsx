import React, { FunctionComponent, useState } from 'react'
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
import GonzoCarouselItem from './coursel-items/GonzoCarouselItem'



interface Props {
    
}


export const carouselDesktopSize = {width : '100%', height : '700px'}

const Carousel : FunctionComponent<Props> = ({}) => {

    const [dimmed, setDimmed] = useState(false)
    
    const dimContent = () => setDimmed(true)

    const undimContent = () => setDimmed(false)

    return (
        <CarouselWrapper>
            <CarouselContainer>
                <GonzoCarouselItem />
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

const DimmerTriggerer = styled.div`
    position : absolute;
    top: 0;
    left : 50%;
    transform: translateX(-50%);
    background-color : peachpuff;
    width : 80%;
    height : 70%;

    margin : auto;

    z-index : 7;

`

const CarouselWrapper = styled.div`

`
const CarouselContainer = styled.div`
    cursor : pointer;
    position : relative;
    width : ${carouselDesktopSize.width};
    background-color : ${primary};
    margin-top : 1rem;   

    .dimmer{
        opacity : 0; 
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

        :hover{
            .dimmer{
                opacity : .7;
            }
        }
    }   
`


export default Carousel
