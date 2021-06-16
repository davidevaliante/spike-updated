import { CountryCodes } from '../constants/CountryCodes'

export const countryCodeToContentLanguage = (code :  CountryCodes) => {
    switch(code){
        case CountryCodes.Italy:
            return 'it-IT'

        default:
            return 'it-IT'
    }
}