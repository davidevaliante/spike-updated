import React, { Fragment, useContext } from 'react'
import Layout from './../components/Layout'
import styled from 'styled-components'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import AquaClient from '../data/graphql/client'
import { homeDataForCountry } from './../data/graphql/get/index';
import { Producer, Seo, SupportedCountry, ApolloBonusCardReveal, ApolloSlotCard } from '../data/graphql/schema'
import { FunctionComponent } from 'react'
import { CountryCodes } from '../constants/CountryCodes'
import MetaTags from '../components/head/MetaTags'
import { LocaleContext } from '../context/LocaleContext'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MarkdownRenderer from './../components/shared/Markdown/MarkdownRenderer';
import Divider from '../components/shared/Divider'
import { darkBg } from './../theme/styled-components';
import VerticalSpacer from './../components/shared/VerticalSpacer';


interface Props {
	seo :Seo,
	topArticle : string,
	bottomArticle : string,
	country :  SupportedCountry,
	bonuses: ApolloBonusCardReveal[],
	onlineSlots : ApolloSlotCard[],
	vltSlots : ApolloSlotCard[],
	barSlots : ApolloSlotCard[],
	producerSlots : ApolloSlotCard[],
}

const index : FunctionComponent<Props> = ({
	seo,
	topArticle,
	bottomArticle,
	country,
	bonuses,
	onlineSlots,
	vltSlots,
	barSlots, 
	producerSlots
}) => {

	const {t} = useContext(LocaleContext)
	const router = useRouter()

	console.log(seo,
		topArticle,
		bottomArticle,
		country,
		bonuses,
		onlineSlots,
		vltSlots,
		barSlots, 
		producerSlots)



	return (
		<Fragment>
			<Head>
				<MetaTags title={t('BaseTitleMetaTag')} description={t('BaseDescription')} canonicalUrl={router.asPath} />
			</Head>
			<Layout>
				<MarkdownRenderer content={topArticle}/>

				<VerticalSpacer />

				<Divider thickness={2} color={darkBg}/>

				<VerticalSpacer />

				<MarkdownRenderer content={bottomArticle}/>
			</Layout>
		</Fragment>
	)
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {

	const {seo, topArticle, bottomArticle, country,  bonuses, onlineSlots, vltSlots, barSlots, producerSlots} =  await homeDataForCountry(CountryCodes.Italy)

	return {
		props:{
			seo,
			topArticle,
			bottomArticle,
			country : 'it',
			bonuses : bonuses.bonus,
			onlineSlots : onlineSlots.slot,
			vltSlots : vltSlots.slot,
			barSlots : barSlots.slot, 
			producerSlots : producerSlots.slot
		}
	}
}


const Grid = styled.div`
	display : flex;
	flex-wrap : wrap;
	align-items : center;
	justify-content :center;
`



export default index
