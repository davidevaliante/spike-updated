import React, { FunctionComponent, useRef, useState } from 'react'
import styled from 'styled-components'
import { accentColor, appGrey, primary } from '../../theme/styled-components'
import Image from 'next/image'
import PlayNowButton from '../buttons/PlayNowButton'
import Header from '../shared/Text/Header'
import Paragraph from './../shared/Text/Paragraph';
import GetOfferButton from '../buttons/GetOfferButton'
import { appYellow, appGold } from './../../theme/styled-components'
import { tablet } from '../../utils/Breakpoints'
import { laptop } from './../../utils/Breakpoints'
import GonzoCarouselItem from './coursel-items/GonzoCarouselItem'
import DeadOrAliveCarousel from './coursel-items/DeadOrAliveCarousel'
import { useEffect } from 'react';
import BookOfOzCarousel from './coursel-items/BookOfOzCarousel'



interface Props {
    
}


export const carouselDesktopSize = {width : '100%', height : '700px'}

const autoCycling = true

const Carousel : FunctionComponent<Props> = ({}) => {

    const carouselCards = [<GonzoCarouselItem/>, <DeadOrAliveCarousel />, <BookOfOzCarousel />]

    const [activeElement, setActiveElement] = useState(0)
    const [timerId, setTimerId] = useState<NodeJS.Timeout[]>([])
    const [isHovering, setIsHovering] = useState(false)


    useEffect(() => {
        if(timerId.length == 0) {
            if(!isHovering && timerId.length == 0) scheduleCycle()
            if(isHovering && timerId.length > 0) clearAllScheduledIntervals()
        }
    }, [timerId, isHovering])
    
    const scheduleCycle = () => {
        console.log('scheduling new cycle')
        const newIntervalId = setTimeout(() => {
            goForwards()
            clearInterval(newIntervalId)
            setTimerId([])
        }, 5000)

        setTimerId([newIntervalId])
    }

    const clearAllScheduledIntervals = () => {
        console.log('clearing');
        
        timerId.forEach(id => clearInterval(id))
    }


    const goForwards = () => {
        // console.log('going forwards', activeElement)
        if(activeElement + 1 <= carouselCards.length-1) setActiveElement(a => activeElement + 1)
        else setActiveElement(0)

        // if(autoCycling) {
        //     clearAllScheduledIntervals()
        //     scheduleCycle()
        // }
    }

    const goBackwards = () => {
        if(activeElement - 1 >= 0) setActiveElement(activeElement - 1)
        else setActiveElement(carouselCards.length-1)

        // if(autoCycling) {
        //     clearAllScheduledIntervals()
        //     scheduleCycle()
        // }
    }


    return (
        <CarouselWrapper>
            <CarouselContainer onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                {carouselCards[activeElement]}
            </CarouselContainer>

            <ControlsContainer>
                <Image onClick={goForwards} width={30} height={30} src='/icons/left-chevron.svg' alt='back carousel button' />
                <Image onClick={goBackwards} width={30} height={30} src='/icons/right-chevron.svg' alt='forwards carousel button'/>
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

export const FadeInFadeOutContainer = styled.div`

    animation: fadeIn 1s;

    @keyframes fadeIn{
        from{opacity : 0}
        to{opacity : 1}
    }
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
