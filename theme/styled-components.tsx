import React, { FunctionComponent } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

interface Props {
    
}


export const appRed = '#ef476f'
export const appRedDisabled = '#b35068'

export const appYellow = '#ffd166'
export const appYellowDisabled = '#dba525'

export const appGreen = '#06d6a0'
export const appGreenDisabled = '#1f8269'

export const appBlue = '#118ab2'
export const appBlueDisabled = '#027196'

export const darkBg = '#404040'

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
    }

    a{
        text-decoration : none;
    }
    
    ::-webkit-scrollbar {
        width: 0.45rem;
    }

    ::-webkit-scrollbar-track{
        background : grey;
    }

    ::-webkit-scrollbar-thumb{
        background : ${appBlue};
    }
`

export default GlobalStyle
