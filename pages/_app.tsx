import React, { Fragment, FunctionComponent } from 'react'
import App from 'next/app'
import { Reset } from 'styled-reset'
import GlobalStyleProvider, { appBlue, appYellow } from '../theme/styled-components'
import CookieConsent from "react-cookie-consent";
import { LocaleContextProvider } from '../context/LocaleContext'

const ContextProvider: FunctionComponent = ({ children }) => {

    return (
		<Fragment>
      		{children}
    	</Fragment>
	)
}

class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props
        return (
            <ContextProvider>
                <GlobalStyleProvider />
                <LocaleContextProvider>
                    <Component {...pageProps} />
                </LocaleContextProvider>
            </ContextProvider>
        )
    }
}

export default MyApp