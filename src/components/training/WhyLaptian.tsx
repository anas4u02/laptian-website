import React from 'react';
import trainingContent from '@/data/training-content.json';
import './WhyLaptian.css';

export default function WhyLaptian() {
    const { whyLaptian } = trainingContent;

    return (
        <section className="section why-laptian-section">
            <div className="container">
                <div className="why-blocks-row">
                    {whyLaptian.map((block, index) => (
                        <div key={index} className="why-block">
                            <div className="why-block-text">
                                <h2>{block.title} <span className="text-highlight">{block.titleHighlight}</span></h2>
                                <p className="why-block-description">{block.description}</p>
                                {block.subtitle && (
                                    <h3 className="why-block-subtitle">{block.subtitle}</h3>
                                )}
                            </div>
                            <div className="why-block-points">
                                {block.points.map((point, pIndex) => (
                                    <div key={pIndex} className="why-point-card">
                                        <span className="why-point-icon">✓</span>
                                        <span className="why-point-text">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
