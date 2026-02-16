import React from 'react';
import Link from 'next/link';
import trainingContent from '@/data/training-content.json';
import './TrainingFeatures.css';

export default function TrainingFeatures() {
    const { trainingFeatures } = trainingContent;
    const { cards, sectionTitle, sectionTitleHighlight, videoCta } = trainingFeatures;

    return (
        <section className="section training-features-section">
            <div className="container">
                {/* Section 8: Feature Cards */}
                <div className="section-header">
                    <h2>{sectionTitle} <span className="text-highlight">{sectionTitleHighlight}</span></h2>
                </div>

                <div className="features-cards-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="feature-card-item">
                            <div className="feature-card-icon">{card.icon}</div>
                            <h3 className="feature-card-title">{card.title}</h3>
                            <p className="feature-card-desc">{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* Section 9: Video CTA Banner */}
                <div className="video-cta-banner">
                    <div className="video-cta-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                        </svg>
                    </div>
                    <h2>{videoCta.title} <span className="text-highlight">{videoCta.titleHighlight}</span></h2>
                    <p>{videoCta.description}</p>
                    <Link href="/contact" className="btn btn-primary btn-lg">
                        Start Learning Today
                    </Link>
                </div>
            </div>
        </section>
    );
}
