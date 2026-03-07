import { Metadata } from 'next';
import commonContent from '@/data/common-content.json';
import type { CommonContent } from '@/types';

const { seo } = commonContent as CommonContent;
const globalSeo = seo.global;

export interface LocalBusinessSchema {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    url: string;
    telephone?: string;
    address?: {
        '@type': string;
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        '@type': string;
        latitude: number;
        longitude: number;
    };
    image?: string;
    priceRange?: string;
}

export interface CourseSchema {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    provider: {
        '@type': string;
        name: string;
    };
    hasCourseInstance?: Array<{
        '@type': string;
        courseMode: string;
        courseWorkload?: string;
    }>;
}

export interface ArticleSchema {
    '@context': string;
    '@type': string;
    headline: string;
    description: string;
    author: {
        '@type': string;
        name: string;
    };
    datePublished?: string;
    publisher: {
        '@type': string;
        name: string;
    };
    mainEntityOfPage?: {
        '@type': string;
        '@id': string;
    };
}

export function generateLocalBusinessSchema(data: Partial<LocalBusinessSchema>): string {
    const schema: LocalBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: data.name || globalSeo.publisherName,
        description: data.description || '',
        url: data.url || globalSeo.metadataBase,
        ...data,
    };

    return JSON.stringify(schema);
}

export function generateCourseSchema(data: Partial<CourseSchema>): string {
    const trainingSeo = seo.training;
    const schema: CourseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: data.name || '',
        description: data.description || '',
        provider: data.provider || {
            '@type': 'Organization',
            name: trainingSeo.defaultCourseProvider || trainingSeo.siteName,
        },
        ...data,
    };

    return JSON.stringify(schema);
}

export function generateArticleSchema(data: {
    title: string;
    description: string;
    author: string;
    datePublished?: string;
    url: string;
}): string {
    const schema: ArticleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        author: {
            '@type': 'Person',
            name: data.author,
        },
        datePublished: data.datePublished,
        publisher: {
            '@type': 'Organization',
            name: globalSeo.publisherName,
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
        },
    };

    return JSON.stringify(schema);
}

export function generateOrganizationSchema(subdomain: 'training' | 'services') {
    const subdomainSeo = seo[subdomain];

    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': subdomainSeo.organizationType,
        name: subdomainSeo.siteName,
        description: subdomainSeo.description,
        url: subdomainSeo.baseUrl,
        sameAs: subdomainSeo.socialLinks,
    };

    if (subdomainSeo.priceRange) {
        schema.priceRange = subdomainSeo.priceRange;
    }

    return JSON.stringify(schema);
}

export function generateMetadata(params: {
    title: string;
    description: string;
    subdomain: 'training' | 'services';
    path?: string;
    ogImage?: string;
}): Metadata {
    const { title, description, subdomain, path = '' } = params;
    const subdomainSeo = seo[subdomain];

    const baseUrl = subdomainSeo.baseUrl;
    const url = `${baseUrl}${path}`;

    const ogImageUrl = params.ogImage || `${baseUrl}${subdomainSeo.ogImage}`;

    return {
        title,
        description,
        keywords: subdomainSeo.keywords,
        authors: [{ name: globalSeo.author }],
        openGraph: {
            title,
            description,
            url,
            siteName: subdomainSeo.siteName,
            type: 'website',
            locale: globalSeo.locale,
            images: [
                {
                    url: ogImageUrl,
                    width: globalSeo.ogImageWidth,
                    height: globalSeo.ogImageHeight,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImageUrl],
        },
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}
