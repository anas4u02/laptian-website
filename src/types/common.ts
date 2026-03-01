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

export interface SeoConfig {
    siteNameShort: string;
    siteName: string;
    organizationType: string;
    priceRange?: string;
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
    seo: SubdomainMap<SeoConfig>;
}
