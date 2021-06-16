import { createGlobalStyle } from 'styled-components'
import config from '../config.json'



export const appRed = '#CF2029'
export const appGrey = '#8e8ea9'

export const appGold = '#db6e0b'

export const accentColor = '#CF2029'
export const primary = '#27273f'
export const primaryDark = '#212335'

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
        font-family: ${config.fontName}, sans-serif;
        background : ${primary};
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
