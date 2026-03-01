import React from 'react';
import servicesContent from '@/data/services-content.json';
import type { ServicesContent } from '@/types';
import './MultiBrand.css';

const data = servicesContent as ServicesContent;

export default function MultiBrand() {
    const { multiBrand } = data;

    return (
        <section className="section multi-brand-section">
            <div className="container">
                <div className="section-header">
                    <h2>
                        {multiBrand.title}{' '}
                        <span className="text-highlight">{multiBrand.titleHighlight}</span>{' '}
                        {multiBrand.titleSuffix}
                    </h2>
                    <p>{multiBrand.subtitle}</p>
                </div>

                <div className="brands-badge-grid">
                    {multiBrand.brands.map((brand, index) => (
                        <div key={index} className="brand-badge">
                            {brand}
                        </div>
                    ))}
                </div>

                <p className="multi-brand-footer">{multiBrand.description}</p>
            </div>
        </section>
    );
}
