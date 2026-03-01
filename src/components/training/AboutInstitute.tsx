import React from 'react';
import trainingContent from '@/data/training-content.json';
import type { TrainingContent } from '@/types';
import './AboutInstitute.css';

const data = trainingContent as TrainingContent;

export default function AboutInstitute() {
    const { aboutInstitute } = data;

    return (
        <section className="section about-institute-section">
            <div className="container">
                <div className="about-institute-banner">
                    <div className="about-institute-glow"></div>
                    <h2>{aboutInstitute.title} <span className="text-highlight">{aboutInstitute.titleHighlight}</span></h2>
                    <p className="about-institute-desc">{aboutInstitute.description}</p>
                    <h3 className="about-institute-subtitle">{aboutInstitute.subtitle}</h3>
                    <div className="about-institute-points">
                        {aboutInstitute.points.map((point, index) => (
                            <div key={index} className="about-institute-point">
                                <div className="about-point-line"></div>
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
