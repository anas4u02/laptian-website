export interface RichTextSegment {
    text: string;
    highlight?: boolean;
}

export interface DescriptionBlock {
    type: 'description';
    richText: RichTextSegment[];
}

export interface BulletsBlock {
    type: 'bullets';
    items: RichTextSegment[][];
}

export interface SubheaderBlock {
    type: 'subheader';
    text: string;
}

export type ContentBlock = DescriptionBlock | BulletsBlock | SubheaderBlock;

export interface AboutUsCard {
    id: string;
    header: string;
    content: ContentBlock[];
}

export interface AboutPageHeader {
    title: string;
    subtitle: string;
}

export interface AboutContent {
    pageHeader: AboutPageHeader;
    aboutUsCards: AboutUsCard[];
}
