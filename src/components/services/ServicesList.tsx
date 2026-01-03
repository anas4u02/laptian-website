import React from 'react';
import Link from 'next/link';
import servicesContent from '@/data/services-content.json';
import './ServicesList.css';

export default function ServicesList() {
    const { servicesList } = servicesContent;

    return (
        <section className="section services-list-section">
            <div className="container">
                <div className="section-header">
                    <h2>{servicesList.title} <span className="text-highlight">{servicesList.titleHighlight}</span></h2>
                    <p>{servicesList.subtitle}</p>
                </div>

                <div className="services-list-grid">
                    {servicesList.services.map((service, index) => (
                        <div key={index} className="service-list-card card">
                            <div className="service-list-icon">{service.icon}</div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-description">{service.description}</p>
                            <div className="service-list-footer">
                                <span className="service-price-tag">{service.price}</span>
                                <Link href="/contact" className="btn btn-sm btn-primary">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="brands-supported">
                    <h3>{servicesList.brandsHeading}</h3>
                    <div className="brands-list">
                        {servicesList.brands.map((brand, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && ' • '}
                                <span>{brand}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
