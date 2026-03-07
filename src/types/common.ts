export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface ContactInfo {
    primaryPhone: string;
    secondaryPhone: string;
    email: string;
    address: Address;
    hours: string;
}

export interface SocialLinks {
    facebook: string;
    instagram: string;
    linkedin: string;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface InfoBarMessage {
    message: string;
}

export interface FooterConfig {
    title: string;
    description: string;
    quickLinksHeading: string;
    contactHeading: string;
    exploreHeading: string;
    exploreLinkText: string;
    exploreLinkUrl: string;
    exploreMessage: string;
}

export interface PromotionalOffer {
    text: string;
    daysValid: number;
    isVisible: boolean;
}

export interface SeoGlobalConfig {
    _comment?: string;
    metadataBase: string;
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    defaultKeywords: string[];
    author: string;
    publisherName: string;
    locale: string;
    ogImageWidth: number;
    ogImageHeight: number;
}

export interface SeoConfig {
    _comment?: string;
    siteNameShort: string;
    siteName: string;
    baseUrl: string;
    organizationType: string;
    description: string;
    keywords: string;
    ogImage: string;
    defaultCourseProvider?: string;
    priceRange?: string;
    socialLinks: string[];
}

export type SubdomainMap<T> = {
    training: T;
    services: T;
};

export interface CommonContent {
    contact: ContactInfo;
    social: SocialLinks;
    infoBar: SubdomainMap<InfoBarMessage>;
    navigation: SubdomainMap<NavLink[]>;
    footer: SubdomainMap<FooterConfig>;
    promotionalOffers: SubdomainMap<PromotionalOffer>;
    _seoGuide: string;
    seo: SubdomainMap<SeoConfig> & {
        _comment?: string;
        global: SeoGlobalConfig;
    };
}
