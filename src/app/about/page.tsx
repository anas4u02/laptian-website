import React from 'react';
import { getSubdomain } from '@/lib/subdomain';
import { generateMetadata as createMetadata } from '@/lib/seo';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutData from '@/data/about-content.json';
import type { AboutData } from '@/types';
import AboutUsCard from '@/components/AboutUsCard/AboutUsCard';
import './about.css';

const allData = aboutData as AboutData;

export const runtime = 'edge';

export async function generateMetadata() {
    const subdomain = await getSubdomain();

    if (subdomain === 'services') {
        return createMetadata({
            title: 'About Us - Laptian Repair Services',
            description: 'Learn about Laptian Repair Services — our expert team, values, and commitment to quality laptop repairs.',
            subdomain: 'services',
            path: '/about',
        });
    }

    return createMetadata({
        title: 'About Us - Laptian Technical Institute',
        description: 'Learn about Laptian Technical Institute — our story, training philosophy, and commitment to producing skilled laptop repair technicians.',
        subdomain: 'training',
        path: '/about',
    });
}

export default async function AboutPage() {
    const subdomain = await getSubdomain();
    const data = allData[subdomain];
    const { pageHeader, aboutUsCards } = data;

    // Split the title around "Trusted" to highlight it
    const highlightWord = 'Trusted';
    const parts = pageHeader.title.split(highlightWord);
    const hasHighlight = parts.length > 1;

    return (
        <>
            <InfoBar subdomain={subdomain} />
            <Header subdomain={subdomain} />

            {/* Hero Banner */}
            <section className="about-hero-section">
                <div className="hero-background" style={{ backgroundImage: 'url(/hero-bg.png)' }}></div>
                <div className="container">
                    <div className="about-hero-content">
                        <h1 className="about-hero-title animate-fade-in">
                            {hasHighlight ? (
                                <>
                                    {parts[0]}
                                    <span className="text-highlight">{highlightWord}</span>
                                    {parts[1]}
                                </>
                            ) : (
                                pageHeader.title
                            )}
                        </h1>
                        <p className="about-hero-subtitle animate-fade-in">
                            {pageHeader.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* About Cards */}
            <main className="about-cards-section">
                <div className="container">
                    <div className="about-cards-grid">
                        {aboutUsCards.map((card) => (
                            <AboutUsCard key={card.id} card={card} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer subdomain={subdomain} />
        </>
    );
}
