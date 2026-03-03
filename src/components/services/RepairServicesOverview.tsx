import React from 'react';
import servicesContent from '@/data/services-content.json';
import type { ServicesContent } from '@/types';
import './RepairServicesOverview.css';

const data = servicesContent as ServicesContent;

export default function RepairServicesOverview() {
    const { repairServicesOverview } = data;

    return (
        <section className="section repair-overview-section">
            <div className="container">
                <div className="repair-overview-content">
                    <h2>
                        {repairServicesOverview.title}{' '}
                        <span className="text-highlight">{repairServicesOverview.titleHighlight}</span>{' '}
                        {repairServicesOverview.titleSuffix}
                    </h2>
                    <p className="repair-overview-description">
                        {repairServicesOverview.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
