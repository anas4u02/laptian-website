import { notFound } from 'next/navigation';
import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata, generateArticleSchema } from '@/lib/seo';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetail from '@/components/training/BlogDetail';
import blogsContent from '@/data/blogs-content.json';
import type { BlogsContent } from '@/types';

const data = blogsContent as BlogsContent;

export const runtime = 'edge';


type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const subdomain = await getSubdomain();
    const post = data.blogs.items.find((p) => p.slug === slug);

    if (!post) {
        return createMetadata({
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found.',
            subdomain,
            path: `/blogs/${slug}`,
        });
    }

    return createMetadata({
        title: `${post.title} - Blog`,
        description: post.excerpt,
        subdomain,
        path: `/blogs/${post.slug}`,
    });
}

export default async function BlogPostPage({ params }: Props) {
    const subdomain = await getSubdomain();
    const { slug } = await params;
    const post = data.blogs.items.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const baseUrl = subdomain === 'training'
        ? 'https://training.laptian.com'
        : 'https://services.laptian.com';

    return (
        <>
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: generateArticleSchema({
                        title: post.title,
                        description: post.excerpt,
                        author: post.author,
                        datePublished: post.date,
                        url: `${baseUrl}/blogs/${post.slug}`,
                    }),
                }}
            />

            <InfoBar subdomain={subdomain} />
            <Header subdomain={subdomain} />
            <BlogDetail post={post} />
            <Footer subdomain={subdomain} />
        </>
    );
}

