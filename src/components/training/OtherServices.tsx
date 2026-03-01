import React from 'react';
import Link from 'next/link';
import trainingContent from '@/data/training-content.json';
import type { TrainingContent } from '@/types';
import './OtherServices.css';

const data = trainingContent as TrainingContent;

export default function OtherServices() {
    const { otherServices } = data;

    return (
        <section className="section other-services-section">
            <div className="container">
                <div className="section-header">
                    <h2>{otherServices.title} <span className="text-highlight">{otherServices.titleHighlight}</span></h2>
                    <p>{otherServices.subtitle}</p>
                </div>

                <div className="other-services-grid">
                    {otherServices.items.map((service, index) => (
                        <div key={index} className="other-service-item">
                            <div className="other-service-icon">{service.icon}</div>
                            <h3 className="other-service-title">{service.title}</h3>
                            <p className="other-service-description">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-section">
                    <h3>{otherServices.cta.heading}</h3>
                    <p>{otherServices.cta.subtitle}</p>
                    <div className="cta-buttons">
                        <Link href={otherServices.cta.primaryButton.link} className="btn btn-primary btn-lg">
                            {otherServices.cta.primaryButton.text}
                        </Link>
                        <Link href={otherServices.cta.secondaryButton.link} className="btn btn-secondary btn-lg">
                            {otherServices.cta.secondaryButton.text}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
