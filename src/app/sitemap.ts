import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrls = {
        training: 'https://training.laptian.com',
        services: 'https://services.laptian.com',
    };

    const trainingPages = [
        '',
        '/courses',
        '/about',
        '/contact',
    ];

    const servicesPages = [
        '',
        '/services',
        '/about',
        '/pricing',
        '/contact',
    ];

    const trainingSitemap = trainingPages.map((path) => ({
        url: `${baseUrls.training}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: path === '' ? 1 : 0.8,
    }));

    const servicesSitemap = servicesPages.map((path) => ({
        url: `${baseUrls.services}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: path === '' ? 1 : 0.8,
    }));

    return [...trainingSitemap, ...servicesSitemap];
}
