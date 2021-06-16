import React, { useState, createContext, useEffect, SetStateAction } from "react"
import { FunctionComponent } from "react"
import { CountryCodes } from '../constants/CountryCodes'
import translations from '../files/translations.json'

interface LocaleContextInterface {
    contextCountry : CountryCodes,
    setContextCountry : any,
    userCountry : any,
    setUserCountry : any,
    t : any
}


// @ts-ignore
export const translate = (countryCode : CountryCodes, key : string) => translations[countryCode][key]

// Create Context Object
export const LocaleContext = createContext<LocaleContextInterface>({
    contextCountry : CountryCodes.Italy,
    setContextCountry : {},
    userCountry : undefined,
    setUserCountry : undefined,
    t : undefined
})

// Create a provider for components to consume and subscribe to changes
export const LocaleContextProvider : FunctionComponent = ( props : any) => {

    const [country, setCountry] = useState(CountryCodes.Italy)
    const [_userCountry, set_userCountry] = useState('')
    
    const t = (key : CountryCodes) => translate(country, key)

    const setContextCountry = (countryCode :CountryCodes) => setCountry(countryCode)
    const setUserCountry = (countryCode : CountryCodes) => set_userCountry(countryCode)

    return(
        <LocaleContext.Provider value={{
            contextCountry : country, 
            setContextCountry, 
            t, 
            userCountry : _userCountry,
            setUserCountry
        }}>
            {props.children}
        </LocaleContext.Provider>
    )
}