import React from 'react';
import servicesContent from '@/data/services-content.json';
import type { ServicesContent } from '@/types';
import './ServiceAreas.css';

const data = servicesContent as ServicesContent;

export default function ServiceAreas() {
    const { serviceAreas } = data;

    return (
        <section className="section service-areas-section">
            <div className="container">
                <div className="section-header">
                    <h2>{serviceAreas.title} <span className="text-highlight">{serviceAreas.titleHighlight}</span></h2>
                    <p>{serviceAreas.subtitle}</p>
                </div>

                <div className="areas-grid">
                    {serviceAreas.areas.map((area, index) => (
                        <div key={index} className="area-tag">
                            <span className="area-pin">📍</span>
                            <span>{area}</span>
                        </div>
                    ))}
                </div>

                <div className="areas-cta-bar">
                    <span className="cta-pulse"></span>
                    <p>{serviceAreas.highlightedCta}</p>
                </div>
            </div>
        </section>
    );
}
