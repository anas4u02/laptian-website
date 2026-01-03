import React from 'react';
import Link from 'next/link';
import servicesContent from '@/data/services-content.json';
import './HeroSection.css';

export default function HeroSection() {
    const { hero } = servicesContent;

    return (
        <section className="services-hero-section">
            <div className="hero-background" style={{ backgroundImage: 'url(/hero-bg.png)' }}></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in">
                        {hero.title} <span className="text-highlight">{hero.titleHighlight}</span> {hero.titleSuffix}
                    </h1>
                    <p className="hero-subtitle animate-fade-in">
                        {hero.subtitle}
                    </p>
                    <div className="hero-actions animate-fade-in">
                        <Link href={hero.primaryCta.link} className="btn btn-primary btn-lg">
                            {hero.primaryCta.text}
                        </Link>
                        <Link href={hero.secondaryCta.link} className="btn btn-secondary btn-lg">
                            {hero.secondaryCta.text}
                        </Link>
                    </div>

                    <div className="services-features">
                        {hero.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-text">
                                    <strong>{feature.title}</strong>
                                    <span>{feature.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
