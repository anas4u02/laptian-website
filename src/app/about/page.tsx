import React from 'react';
import { getSubdomain } from '@/lib/subdomain';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutData from '@/data/about-content.json';
import { Icons } from '@/components/Icons';
import FeatureCard from '@/components/FeatureCard/FeatureCard';

export const metadata = {
    title: 'Many Problems. One Solution.',
    description: 'Transform your life with our coursework.',
};

export default async function AboutPage() {
    const subdomain = await getSubdomain();
    const { pageHeader, sections } = aboutData;

    return (
        <>
            <InfoBar subdomain={subdomain} />
            <Header subdomain={subdomain} />

            <main className="bg-black min-h-screen py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 md:mb-24">
                        <h1 className="text-5xl md:text-6xl font-black text-[#ffbd00] mb-4 mt-4 tracking-tighter">
                            {pageHeader.title}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-light">
                            {pageHeader.subtitle}
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        {sections.map((section) => (
                            <FeatureCard
                                key={section.id}
                                id={section.id}
                                title={section.title}
                                description={section.description}
                                icon={section.icon as keyof typeof Icons}
                                image={section.image}
                                url={section.url}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer subdomain={subdomain} />
        </>
    );
}
