import React from 'react';
import servicesContent from '@/data/services-content.json';
import type { ServicesContent } from '@/types';
import './WhyChoose.css';

const data = servicesContent as ServicesContent;

export default function WhyChoose() {
    const { whyChoose } = data;

    return (
        <section className="section why-choose-section">
            <div className="container">
                <div className="section-header">
                    <h2>
                        {whyChoose.title}{' '}
                        <span className="text-highlight">{whyChoose.titleHighlight}</span>{' '}
                        {whyChoose.titleSuffix}
                    </h2>
                    <p>{whyChoose.subtitle}</p>
                </div>

                <div className="why-choose-grid">
                    {whyChoose.points.map((point, index) => (
                        <div key={index} className="why-choose-item card">
                            <span className="why-choose-icon">{point.icon}</span>
                            <span className="why-choose-text">{point.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
