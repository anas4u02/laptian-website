import React from 'react';
import { getSubdomain } from '@/lib/subdomain';
import InfoBar from '@/components/InfoBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutData from '@/data/about-content.json';
import type { AboutContent } from '@/types';
import AboutUsCard from '@/components/AboutUsCard/AboutUsCard';
import './about.css';

const data = aboutData as AboutContent;

export const metadata = {
    title: 'A Trusted Laptop Repair Training Institute in India.',
    description: 'Transform your life with our coursework.',
};

export default async function AboutPage() {
    const subdomain = await getSubdomain();
    const { pageHeader, aboutUsCards } = data;
    const [before, after] = pageHeader.title.split("Trusted");

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
                            {before}
                            <span className="text-highlight">Trusted</span>
                            {after}
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
