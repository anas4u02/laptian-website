export interface CtaButton {
    text: string;
    link: string;
}

export interface HeroFeature {
    icon: string;
    title: string;
    subtitle: string;
}

export interface ServicesHero {
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
    features: HeroFeature[];
}

export interface ServiceItem {
    icon: string;
    title: string;
    description: string;
    price: string;
}

export interface ServicesListSection {
    title: string;
    titleHighlight: string;
    subtitle: string;
    services: ServiceItem[];
    brandsHeading: string;
    brands: string[];
}

export interface ProcessStep {
    number: number;
    title: string;
    description: string;
    icon: string;
}

export interface ProcessFlowCta {
    text: string;
    buttonText: string;
    buttonLink: string;
}

export interface ProcessFlowSection {
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: ProcessStep[];
    cta: ProcessFlowCta;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    rating: number;
    text: string;
    image: string;
}

export interface TestimonialsSection {
    title: string;
    titleHighlight: string;
    subtitle: string;
    reviews: Testimonial[];
}

export interface ServiceAreasSection {
    title: string;
    titleHighlight: string;
    subtitle: string;
    areas: string[];
    highlightedCta: string;
}

export interface TrustedPartnerSection {
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    points: string[];
}

export interface WhyChoosePoint {
    icon: string;
    text: string;
}

export interface WhyChooseSection {
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    points: WhyChoosePoint[];
}

export interface MultiBrandSection {
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    description: string;
    brands: string[];
}

export interface ServiceCategoryItem {
    text: string;
    detail: string;
}

export interface ServiceCategory {
    title: string;
    titleHighlight: string;
    icon: string;
    items: ServiceCategoryItem[];
}

export interface CompleteServicesSection {
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    hardwareRepair: ServiceCategory;
    performanceUpgrades: ServiceCategory;
    softwareServices: ServiceCategory;
}

export interface ChipLevelSection {
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
}

export interface ServicesContent {
    hero: ServicesHero;
    servicesList: ServicesListSection;
    processFlow: ProcessFlowSection;
    testimonials: TestimonialsSection;
    serviceAreas: ServiceAreasSection;
    trustedPartner: TrustedPartnerSection;
    whyChoose: WhyChooseSection;
    multiBrand: MultiBrandSection;
    completeServices: CompleteServicesSection;
    chipLevelRepair: ChipLevelSection;
}
