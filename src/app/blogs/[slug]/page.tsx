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
    const subdomain = await getSubdomain();
    const post = blogsContent.blogs.items.find((p) => p.slug === slug);

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
    const post = blogsContent.blogs.items.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <InfoBar subdomain={subdomain} />
            <Header subdomain={subdomain} />
            <BlogDetail post={post} />
            <Footer subdomain={subdomain} />
        </>
    );
}
