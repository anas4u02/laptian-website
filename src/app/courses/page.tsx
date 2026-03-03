import { notFound } from 'next/navigation';
import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata } from '@/lib/seo';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoursesLanding from '@/components/training/CoursesLanding';

export async function generateMetadata() {
    return createMetadata({
        title: 'Our Training Courses - Laptian Technical Institute',
        description: 'Explore our comprehensive laptop repair training courses. From beginner to professional certification with hands-on training and placement support.',
        subdomain: 'training',
        path: '/courses',
    });
}

export default async function CoursesPage() {
    const subdomain = await getSubdomain();

    if (subdomain !== 'training') {
        notFound();
    }

    return (
        <>
            <InfoBar subdomain="training" />
            <Header subdomain="training" />
            <CoursesLanding />
            <Footer subdomain="training" />
        </>
    );
}
