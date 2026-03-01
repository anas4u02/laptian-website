export interface CtaButton {
    text: string;
    link: string;
}

export interface HeroStat {
    value: string;
    label: string;
}

export interface TrainingHero {
    title: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
    stats: HeroStat[];
}

export interface GalleryImage {
    src: string;
    alt: string;
    title: string;
}

export interface GallerySection {
    title: string;
    titleHighlight: string;
    subtitle: string;
    images: GalleryImage[];
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

export interface OtherServiceItem {
    icon: string;
    title: string;
    description: string;
}

export interface OtherServicesCta {
    heading: string;
    subtitle: string;
    primaryButton: CtaButton;
    secondaryButton: CtaButton;
}

export interface OtherServicesSection {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: OtherServiceItem[];
    cta: OtherServicesCta;
}

export interface WhyLaptianBlock {
    title: string;
    titleHighlight: string;
    description: string;
    subtitle?: string;
    points: string[];
}

export interface TrainingHighlightPoint {
    icon: string;
    text: string;
}

export interface TrainingHighlightBlock {
    title: string;
    titleHighlight: string;
    description: string;
    subdescription?: string;
    points: TrainingHighlightPoint[];
}

export interface SkillsMasteryBlock {
    title: string;
    titleHighlight: string;
    description: string;
    subdescription?: string;
    subtitle?: string;
    points: string[];
}

export interface AboutInstituteSection {
    title: string;
    titleHighlight: string;
    description: string;
    subtitle: string;
    points: string[];
}

export interface TrainingFeatureCard {
    icon: string;
    title: string;
    description: string;
}

export interface VideoCta {
    title: string;
    titleHighlight: string;
    description: string;
}

export interface TrainingFeaturesSection {
    cards: TrainingFeatureCard[];
    sectionTitle: string;
    sectionTitleHighlight: string;
    videoCta: VideoCta;
}

export interface TrainingContent {
    hero: TrainingHero;
    gallery: GallerySection;
    testimonials: TestimonialsSection;
    otherServices: OtherServicesSection;
    whyLaptian: WhyLaptianBlock[];
    trainingHighlights: TrainingHighlightBlock[];
    skillsMastery: SkillsMasteryBlock[];
    aboutInstitute: AboutInstituteSection;
    trainingFeatures: TrainingFeaturesSection;
}
