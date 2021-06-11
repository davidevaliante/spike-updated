import React, { Fragment, useContext } from 'react'
import { FunctionComponent } from 'react';
import CookieConsent from 'react-cookie-consent'
import { LocaleContext } from '../context/LocaleContext'
import { appBlue, appYellow } from '../theme/styled-components'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from './shared/Navbar'

interface Props {
    
}

const Layout : FunctionComponent<Props> = ({children}) => {

    const {t, contextCountry} = useContext(LocaleContext)

    return (
        <Fragment>

            <Navbar />

            <PageLayout>
                {children}
            </PageLayout>

            <CookieConsent
				location='bottom'
				buttonText={t('CookieAcceptButton')}
				cookieName="cookiesAccepted"
				style={{ background: appBlue }}
				buttonStyle={{ background: appYellow, fontSize: "13px", borderRadius : '25px', padding : '1rem' }}
				expires={365}>
				{t('CookieConsentDescriptionString')}

                <div style={{marginTop : '1rem'}}>
                    <Link href={`cookie-privacy-policy/${contextCountry}`}>{t('CookieLearnMore')}</Link>
                </div>

            </CookieConsent>
        </Fragment>
    )
}

const PageLayout = styled.div`
    margin-left : 5rem;
`

export default Layout
