import { notFound } from 'next/navigation';
import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata } from '@/lib/seo';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetail from '@/components/training/BlogDetail';
import blogsContent from '@/data/blogs-content.json';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = blogsContent.blogs.items.find((p) => p.slug === slug);

    if (!post) {
        return createMetadata({
            title: 'Blog Post Not Found - Laptian Academy',
            description: 'The requested blog post could not be found.',
            subdomain: 'training',
            path: `/blogs/${slug}`,
        });
    }

    return createMetadata({
        title: `${post.title} - Laptian Academy Blog`,
        description: post.excerpt,
        subdomain: 'training',
        path: `/blogs/${post.slug}`,
    });
}

export default async function BlogPostPage({ params }: Props) {
    const subdomain = await getSubdomain();

    if (subdomain !== 'training') {
        notFound();
    }

    const { slug } = await params;
    const post = blogsContent.blogs.items.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <InfoBar subdomain="training" />
            <Header subdomain="training" />
            <BlogDetail post={post} />
            <Footer subdomain="training" />
        </>
    );
}
