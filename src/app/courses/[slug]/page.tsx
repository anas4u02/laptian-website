import { notFound } from 'next/navigation';
import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata, generateCourseSchema } from '@/lib/seo';
import coursesContent from '@/data/training/courses.json';
import type { CoursesContent } from '@/types';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseDetail from '@/components/training/CourseDetail';

const data = coursesContent as CoursesContent;

interface CoursePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: CoursePageProps) {
    const { slug } = await params;
    const course = data.courses.items.find(
        (c) => c.slug === slug
    );

    if (!course) {
        return createMetadata({
            title: 'Course Not Found - Laptian Technical Institute',
            description: 'The course you are looking for could not be found.',
            subdomain: 'training',
            path: `/courses/${slug}`,
        });
    }

    return createMetadata({
        title: `${course.title} - Laptian Technical Institute`,
        description: course.description,
        subdomain: 'training',
        path: `/courses/${slug}`,
    });
}

export default async function CoursePage({ params }: CoursePageProps) {
    const subdomain = await getSubdomain();

    // Redirect to training subdomain if not already there
    if (subdomain !== 'training') {
        notFound();
    }

    const { slug } = await params;
    const course = data.courses.items.find(
        (c) => c.slug === slug
    );

    if (!course) {
        notFound();
    }

    return (
        <>
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: generateCourseSchema({
                        name: course.title,
                        description: course.description,
                        provider: {
                            '@type': 'Organization',
                            name: 'Laptian Technical Institute',
                        },
                        hasCourseInstance: [
                            {
                                '@type': 'CourseInstance',
                                courseMode: 'onsite',
                                courseWorkload: course.duration,
                            },
                        ],
                    }),
                }}
            />

            <InfoBar subdomain="training" />
            <Header subdomain="training" />
            <CourseDetail course={course} />
            <Footer subdomain="training" />
        </>
    );
}

// Generate static params for all courses
export async function generateStaticParams() {
    return data.courses.items
        .filter((course) => course.slug)
        .map((course) => ({
            slug: course.slug,
        }));
}
