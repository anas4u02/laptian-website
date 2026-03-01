export interface AboutSection {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    url: string;
    theme: string;
}

export interface AboutPageHeader {
    title: string;
    subtitle: string;
}

export interface AboutContent {
    pageHeader: AboutPageHeader;
    sections: AboutSection[];
}
