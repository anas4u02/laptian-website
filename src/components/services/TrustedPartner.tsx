import React from 'react';
import servicesContent from '@/data/services-content.json';
import type { ServicesContent } from '@/types';
import './TrustedPartner.css';

const data = servicesContent as ServicesContent;

export default function TrustedPartner() {
    const { trustedPartner } = data;

    return (
        <section className="section trusted-partner-section">
            <div className="container">
                <div className="trusted-partner-layout">
                    <div className="trusted-partner-text">
                        <h2>
                            {trustedPartner.title}{' '}
                            <span className="text-highlight">{trustedPartner.titleHighlight}</span>{' '}
                            {trustedPartner.titleSuffix}
                        </h2>
                        <p className="trusted-partner-description">{trustedPartner.description}</p>
                    </div>

                    <div className="trusted-partner-points">
                        {trustedPartner.points.map((point, index) => (
                            <div key={index} className="trust-point-card card">
                                <span className="trust-point-icon">✓</span>
                                <span className="trust-point-text">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
