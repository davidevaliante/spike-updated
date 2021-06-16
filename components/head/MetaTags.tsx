import React, { Fragment, useContext } from 'react'
import { FunctionComponent } from 'react';
import { appRed } from '../../theme/styled-components'
import config from '../../config.json'
import { LocaleContext } from '../../context/LocaleContext'
import { countryCodeToContentLanguage } from './../../utils/multilanguage';
import Head from 'next/head'

interface Props {
    title : string,
    description : string,
    canonicalUrl : string,
    imageUrl? : string,
    createdAt? :string
    googleSiteVerification? : string[]
}

const MetaTags : FunctionComponent<Props> = ({
    title,
    description,
    canonicalUrl,
    imageUrl = config.baseCoverImage,
    createdAt,
    googleSiteVerification
}) => {

    const { contextCountry } = useContext(LocaleContext)
    console.log('called')
    console.log(title, 'title')

    return (
        <Head>
            <title>{title}</title>
            <meta httpEquiv="content-language" content={countryCodeToContentLanguage(contextCountry)}></meta>
            <meta charSet="utf-8" />
            <meta name="description" content={description}/>

            <link rel="canonical" href={`${config.canonicaUrlRoot}/${canonicalUrl}`} />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={imageUrl} />
            
            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* <!-- Open Graph --> */}
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:locale" content={contextCountry} />
            <meta property="og:type" content="article" />
            <meta property="article:tag" content={title} />
            <meta property="article:published_time" content={createdAt} />

            <meta name="google-site-verification" content={config.googleSiteVerificationYoutube} />
            {googleSiteVerification && googleSiteVerification.map(verificationString => <meta name={verificationString} />)}
            <link rel="shortcut icon" href="favicon.ico" />
            <meta name="theme-color" content={appRed} />
            <meta name="trustpilot-one-time-domain-verification-id" content="cf1b3477-d2d7-4301-8bb2-ac990e9d75de"/>
            <meta name='dmca-site-verification' content='Zm11U3BIcnlVMlNEcUo4SjVESEsrSS9FcUVwb0RzNVV2M3NwSDM1eFdNVT01' />
        </Head>
    )
}

export default MetaTags
