import { Metadata } from 'next';

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
        name: data.name || 'Laptian',
        description: data.description || '',
        url: data.url || 'https://laptian.com',
        ...data,
    };

    return JSON.stringify(schema);
}

export function generateCourseSchema(data: Partial<CourseSchema>): string {
    const schema: CourseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: data.name || '',
        description: data.description || '',
        provider: data.provider || {
            '@type': 'Organization',
            name: 'Laptian Training Center',
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
            name: 'Laptian',
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
        },
    };

    return JSON.stringify(schema);
}

export function generateOrganizationSchema(subdomain: 'training' | 'services') {
    const schemas = {
        training: {
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Laptian Training Center',
            description: 'Professional laptop repair training and certification center',
            url: 'https://training.laptian.com',
            sameAs: [
                'https://facebook.com/laptian',
                'https://instagram.com/laptian',
                'https://twitter.com/laptian',
                'https://linkedin.com/company/laptian',
            ],
        },
        services: {
            '@context': 'https://schema.org',
            '@type': 'ComputerStore',
            name: 'Laptian Repair Services',
            description: 'Expert laptop repair and maintenance services',
            url: 'https://services.laptian.com',
            sameAs: [
                'https://facebook.com/laptian',
                'https://instagram.com/laptian',
                'https://twitter.com/laptian',
            ],
            priceRange: '$$',
        },
    };

    return JSON.stringify(schemas[subdomain]);
}

export function generateMetadata(params: {
    title: string;
    description: string;
    subdomain: 'training' | 'services';
    path?: string;
    ogImage?: string;
}): Metadata {
    const { title, description, subdomain, path = '' } = params;

    const baseUrl = subdomain === 'training'
        ? 'https://training.laptian.com'
        : 'https://services.laptian.com';

    const url = `${baseUrl}${path}`;

    return {
        title,
        description,
        keywords: subdomain === 'training'
            ? 'laptop repair training, computer repair course, hardware training, laptop technician certification, repair skills'
            : 'laptop repair services, computer repair, screen replacement, motherboard repair, data recovery',
        authors: [{ name: 'Laptian' }],
        openGraph: {
            title,
            description,
            url,
            siteName: subdomain === 'training' ? 'Laptian Training Center' : 'Laptian Repair Services',
            type: 'website',
            locale: 'en_US',
            images: [
                {
                    url: params.ogImage || (subdomain === 'training'
                        ? `${baseUrl}/training-facility.png`
                        : `${baseUrl}/laptop-repair.png`),
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [params.ogImage || (subdomain === 'training'
                ? `${baseUrl}/training-facility.png`
                : `${baseUrl}/laptop-repair.png`)],
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
