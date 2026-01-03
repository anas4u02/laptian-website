import React from 'react';
import Link from 'next/link';
import trainingContent from '@/data/training-content.json';
import './HeroSection.css';

export default function HeroSection() {
    const { hero } = trainingContent;

    return (
        <section className="hero-section">
            <div className="hero-background" style={{ backgroundImage: 'url(/hero-bg.png)' }}></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in">
                        {hero.title}{' '}
                        <span className="text-highlight">{hero.titleHighlight}</span>
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

                    <div className="hero-stats">
                        {hero.stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-arrow">↓</div>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}
