export interface Bonus {
    id: number
    description: string
    backgroundColor: string
    borderColor: string
    link: string
    name: string
    noDeposit: string
    withDeposit: string
    rating: number
    tips: string
    country: SupportedCountry
    legacyId: string
    slug: string
    acceptedPayments: { methodName: string }[]
    bonus_guide?: {
        slug: string
    }
    circular_image: {
        url: string
    }
}

export interface Producer {
    id: number
    name: string
    website: string
    description: string
    image: {
        url: string
    }
    country: SupportedCountry
    legacyId: string
    slug: string
    bottomArticle?: string
    slots: Slot[]
}

export interface Slot {
    id: string
    created_at: Date
    updated_at: Date
    description: string
    rtp: number
    winningSpinFrequency: number
    theme: string
    volatility: string
    gameMode: string
    isPopularInCountry: boolean
    playLink: string
    linkYoutube: string
    videoDescription: string
    name: string
    rating: number
    tips: string
    country: SupportedCountry
    technicals: string
    legacyId: string
    slug: string
    producer: Producer
    relatedSlots: Slot[]
    type: SLOT_TYPE
    image: {
        url: string
    },
    seo?: Seo

    bonuses: Bonus[]
    mainBonus: Bonus
}

export interface SupportedCountry {
    id: number
    code: string
    name: string
    englishName: string
    getAllBonuses: Bonus[]
    producers: Producer[]
    slots: Slot[]
}

export interface Home {
    id: number
    seo: Seo
    topArticle?: string
    bottomArticle?: string  
    country: SupportedCountry
    highlightProducer: Producer
    bonuses: {
        bonus: { bonus: ApolloBonusCardReveal }[]
    }
    onlineSlots: {
        slot: { slot: ApolloSlotCard }[]
    }
    barSlots: {
        slot: { slot: ApolloSlotCard }[]
    }
    vltSlots: {
        slot: { slot: ApolloSlotCard }[]
    }
    producerSlots: {
        slot: { slot: ApolloSlotCard }[]
    }
}

export enum PRODUCER_STATUS {
    VISIBLE = 'public',
    HIDDEN = 'hidden'
}

export interface ProducerInput {
    legacyId?: string
    name: string
    website: string
    description: string
    country: number
    slug: string
    legacySlug: string
    status: PRODUCER_STATUS
    image: number
    nameWithCountry: string
}

export enum BONUS_STATUS {
    VISIBLE = 'public',
    HIDDEN = 'hidden'
}

export interface BonusInput {
    legacyId?: string
    description: string
    backgroundColor: string
    borderColor: string
    link: string
    name: string
    noDeposit: string
    withDeposit: string
    rating: number
    tips: string
    country: number
    slug: string
    status: BONUS_STATUS
    circular_image?: number
    nameWithCountry: string
}

export enum SLOT_STATUS {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    ARCHIVE = 'archive'
}

export enum SLOT_TYPE {
    ONLINE = 'online',
    BAR = 'bar',
    VLT = 'vlt'
}


export interface SlotInput {
    description: string
    isPopularInCountry: boolean
    playLink: string
    linkYoutube: string
    videoDescription: string
    name: string
    rating: number
    tips: string
    relatedSlots: number[]
    country: number
    technicals: string
    legacyId?: string
    slug: string
    producer?: number
    status: SLOT_STATUS,
    legacySlug: string,
    image?: number
    type: SLOT_TYPE
    onlineEquivalent?: number
    bonuses?: number[]
    nameWithTypeAndCountry?: string
    barSuggested?: number
}

export interface editSlotInput {
    description?: string
    isPopularInCountry?: Boolean
    playLink?: string
    linkYoutube?: string
    videoDescription?: string
    name?: string
    rating?: number
    tips?: string
    relatedSlots?: number[]
    country?: number
    technicals?: string
    legacyId?: string
    slug?: string
    producer?: number
    status?: SLOT_STATUS
    legacySlug?: string
    image?: number
    type?: SLOT_TYPE
    onlineEquivalent?: number
    bonuses?: number[]
    nameWithTypeAndCountry?: string
}

export interface updateRelatedSlotInput {
    data?: number[]
    where: InputID
}

export interface updateSlotInput {
    where: InputID
    data: editSlotInput
}


export interface InputID {
    id: number
}

export interface AlgoliaSearchResult {
    name: string
    type: 'slot' | 'bonus' | 'producer'
    slug: string
    country: string
    image: { url: string }
    bonuses: [{ link: string }],
    rating: number
    link?: string
    producer?: {
        id: number
    }
    mainBonus : {
        link:string
    }
}

export interface Video {
    approved: boolean
    auxiliaryBonuses: string[]
    description: string
    highLights: VideoHighlight[]
    lastModified: number
    lastUpdate: number
    mainBonus: string
    relatedSlots: string[]
    newRelatedSlots: string[]
    relatedVideos: string[]
    slotType: 'GRATIS' | 'BAR' | 'VLT'
    time: number
    title: string
    videoId: string
    visibility: 'VISIBLE' | 'HIDDEN'
}

export interface AlgoliaVideo {
    videoId: string
    title: string
    description: string
    time: number
    slotType: 'GRATIS' | 'BAR' | 'VLT'
}

export interface VideoHighlight {
    minute: string
    second: string
}

export interface Article {
    content: (DynamicArticle | DynamicBonusList | DynamicSlotList | DynamicVideo)[]
    image?: any,
    tags?: string
    slug?: string
    title: string
    created_at: string
    country?: {
        code: string
    }
    seo?: Seo
}

export interface CrazyTimeArticle {
    topContent: (DynamicArticle | DynamicBonusList | DynamicSlotList | DynamicVideo)[]
    bottomContent: (DynamicArticle | DynamicBonusList | DynamicSlotList | DynamicVideo)[]
    country?: {
        code: string
    }
    seo: Seo
}

export interface BlogArticle {
    article: string
    image?: any,
    tags?: string
    slug?: string
    title: string
    created_at: string
    country?: {
        code: string
    }
    seo?: Seo
}

export interface BonusGuide {
    article?: string,
    bonus?: Bonus,
    slug?: string,
    country?: SupportedCountry,
    image?: {
        url?: string
    }
    seo?: Seo
}

export interface VltSlotListPage {
    topArticle?: string,
    bottomArticle?: string,
    seo?: Seo,
    country?: SupportedCountry,
    sliderSlots: ApolloSlotCard[],

}

export interface BarSlotListPage {
    topArticle?: string,
    bottomArticle?: string,
    seo?: Seo,
    country?: SupportedCountry,
    sliderSlots: {
        slot: { slot: ApolloSlotCard }[]
    },

}

export interface Seo {
    seoTitle: string
    seoDescription: string
}

export class SlotCard {
    constructor(
        public id: string | undefined,
        public description: string,
        public name: string,
        public producer: string,
        public rating: string,
        public specialBonusLink: string,
        public time: number,
        public type: 'GRATIS' | 'BAR' | 'VLT'
    ) {}
}

export class ApolloSlotCard {
    constructor(
        public id: string | undefined,
        public image: { url: string },
        public name: string,
        public rating: number,
        public slug: string,
        public type: SLOT_TYPE,
        public bonuses: Bonus[]
    ) {}
}

export class OldSlot {
    constructor(
        public id: string | undefined,
        public legacyId: string | undefined,
        public bonus: Bonus[],
        public bonusSpecial: Bonus,
        public description: string,
        public isPopular: boolean,
        public linkPlay: string,
        public linkYoutube: string,
        public linkYoutubeDescription: string,
        public name: string,
        public onlineVersion: SlotCard,
        public producer: Producer,
        public rating: string,
        public similarSlots: any,
        public specialBonusLink: string,
        public tecnicals: string,
        public time: number,
        public tips: string,
        public type: 'GRATIS' | 'BAR' | 'VLT'
    ) {}
}

export class Slot {
    constructor(
        public _id: string | undefined,
        public legacyId: string,
        public legacySlug: string,
        public description: string,
        public isPopularInCountry: boolean,
        public playLink: string,
        public linkYoutube: string,
        public videoDescription: string,
        public name: string,
        public rating: number,
        public tips: string,
        public country: SupportedCountry,
        public technicals: string,
        public slug: string,
        public producer: Producer,
        public _relatedSlots: number[],
        public status: 'published' | 'draft' | 'archive'
    ) {}
}

export class Bonus {
    constructor(
        public id_: string | undefined,
        public legacyId: string,
        public legacySlug: string,
        public bonus: string,
        public bonusImageBg: string,
        public borderColor: string,
        public bonusCompareLink: string,
        public guideId: string,
        public link: string,
        public name: string,
        public noDepositText: string,
        public _rating: string,
        public tips: string,
        public withDepositText: string,
        public time: number,
        public status: 'public' | 'hidden'
    ) { }
}

export class ApolloBonusCardReveal {
    constructor(
        public id: string | undefined | number,
        public name: string,
        public circular_image: { url: string },
        public borderColor: string,
        public backgroundColor: string,
        public noDeposit: string,
        public withDeposit: string,
        public rating: number,
        public tips: string,
        public link: string,
        public bonus_guide: {
            slug: string
        },
        public description?: string,

    ) { }
}

export interface DynamicArticle {
    type: 'article'
    article: string
}

export interface DynamicBonusList {
    type: 'bonusList'
    direction: 'vertical' | 'horizontal'
    bonus: { bonus: Bonus }[]
    tableLabel?: string
    collapsable?: boolean
}

export interface DynamicSlotList {
    type: 'slotList'
    slot: { slot: ApolloSlotCard }[]
}

export interface DynamicVideo {
    type: 'video'
    videoUrl: string
    thumbnailUrl?: string
}

export interface DynamicContentProps {
    content: (DynamicArticle | DynamicBonusList | DynamicSlotList | DynamicVideo)[]
    isBakeca? : boolean
}

