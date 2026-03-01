import React from 'react';
import servicesContent from '@/data/services-content.json';
import type { ServicesContent, ServiceCategory } from '@/types';
import './CompleteServices.css';

const data = servicesContent as ServicesContent;

function ServiceCategoryBlock({ category }: { category: ServiceCategory }) {
    return (
        <div className="service-category-block">
            <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>
                    {category.title}{' '}
                    <span className="text-highlight">{category.titleHighlight}</span>
                </h3>
            </div>
            <ul className="category-items">
                {category.items.map((item, index) => (
                    <li key={index} className="category-item">
                        <span className="item-bullet">•</span>
                        <span className="item-text">
                            <strong>{item.text}</strong>
                            {item.detail && <span className="item-detail"> — {item.detail}</span>}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function CompleteServices() {
    const { completeServices } = data;

    return (
        <section className="section complete-services-section">
            <div className="container">
                <div className="section-header">
                    <h2>
                        {completeServices.title}{' '}
                        <span className="text-highlight">{completeServices.titleHighlight}</span>{' '}
                        {completeServices.titleSuffix}
                    </h2>
                </div>

                <div className="service-categories-grid">
                    <ServiceCategoryBlock category={completeServices.hardwareRepair} />
                    <ServiceCategoryBlock category={completeServices.performanceUpgrades} />
                    <ServiceCategoryBlock category={completeServices.softwareServices} />
                </div>
            </div>
        </section>
    );
}
