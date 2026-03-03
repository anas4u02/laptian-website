import { MetadataRoute } from 'next';
import coursesContent from '@/data/training/courses.json';
import blogsContent from '@/data/blogs-content.json';

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
        '/blogs',
    ];

    const servicesPages = [
        '',
        '/about',
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

    // Dynamic course pages
    const courseSitemap = coursesContent.courses.items
        .filter((course) => course.slug)
        .map((course) => ({
            url: `${baseUrls.training}/courses/${course.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    // Dynamic blog pages
    const blogSitemap = blogsContent.blogs.items
        .filter((post) => post.slug)
        .map((post) => ({
            url: `${baseUrls.training}/blogs/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }));

    return [...trainingSitemap, ...servicesSitemap, ...courseSitemap, ...blogSitemap];
}
