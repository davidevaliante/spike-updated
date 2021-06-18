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
import SlotCard from '../components/cards/SlotCard'
import SlotList from '../components/Lists/SlotList'
import Carousel from '../components/carousel/Carousel'


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

	// console.log(
	// 	onlineSlots,
	// 	vltSlots,
	// 	barSlots, 
	// 	producerSlots)

	return (
		<Fragment>
			<MetaTags title={t('BaseTitleMetaTag')} description={t('BaseDescription')} canonicalUrl={router.asPath} />

			<Layout>
				<Carousel />


				<VerticalSpacer />
				<VerticalSpacer />
				<SlotList listHeader='Selezionate da SPIKE' slots={[...onlineSlots, ...producerSlots, ...vltSlots, ...barSlots]}>

				</SlotList>
				
				{/* <MarkdownRenderer content={topArticle}/>

				<SlotList listHeader={t('Best Online Slots')} scrollbarColor='#ebba34'>
					{onlineSlots.map(s => <SlotCard key={s.id} slot={s}/>)}
				</SlotList>

				<SlotList listHeader={t('Best Online Slots')} scrollbarColor='#ebba34'>
					{producerSlots.map(s => <SlotCard key={s.id} slot={s}/>)}
				</SlotList>

				<SlotList listHeader={t('Best Online Slots')} scrollbarColor='#ebba34'>
					{vltSlots.map(s => <SlotCard key={s.id} slot={s}/>)}
				</SlotList>

				<SlotList listHeader={t('Best Online Slots')} scrollbarColor='#ebba34'>
					{barSlots.map(s => <SlotCard key={s.id} slot={s}/>)}
				</SlotList>

				<VerticalSpacer />

				<VerticalSpacer />

				<MarkdownRenderer content={bottomArticle}/> */}
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
			onlineSlots : onlineSlots.slot.map(s => s.slot),
			vltSlots : vltSlots.slot.map(s => s.slot),
			barSlots : barSlots.slot.map(s => s.slot), 
			producerSlots : producerSlots.slot.map(s => s.slot)
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
