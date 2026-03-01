import React from 'react';
import servicesContent from '@/data/services-content.json';
import type { ServicesContent } from '@/types';
import './ChipLevelRepair.css';

const data = servicesContent as ServicesContent;

export default function ChipLevelRepair() {
    const { chipLevelRepair } = data;

    return (
        <section className="section chip-level-section">
            <div className="container">
                <div className="chip-level-banner">
                    <div className="chip-level-icon-wrapper">
                        <span className="chip-level-icon">🔬</span>
                    </div>
                    <h2>
                        {chipLevelRepair.title}{' '}
                        <span className="text-highlight">{chipLevelRepair.titleHighlight}</span>{' '}
                        {chipLevelRepair.titleSuffix}
                    </h2>
                    <p>{chipLevelRepair.description}</p>
                </div>
            </div>
        </section>
    );
}
