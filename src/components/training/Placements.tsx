import React from 'react';
import trainingContent from '@/data/training-content.json';
import './Placements.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { placements } = trainingContent as Record<string, any>;

interface PlacementStat {
    value: string;
    label: string;
}

interface Company {
    logo: string;
    name: string;
}

interface SuccessStory {
    icon: string;
    title: string;
    description: string;
}

export default function Placements() {
    return (
        <section className="section placements-section">
            <div className="container">
                <div className="section-header">
                    <h2>{placements.title} <span className="text-highlight">{placements.titleHighlight}</span></h2>
                    <p>{placements.subtitle}</p>
                </div>

                <div className="placement-stats-grid">
                    {placements.stats.map((stat: PlacementStat, index: number) => (
                        <div key={index} className="placement-stat">
                            <div className="placement-stat-value">{stat.value}</div>
                            <div className="placement-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="companies-section">
                    <h3 className="companies-heading">{placements.companiesHeading}</h3>
                    <div className="companies-grid">
                        {placements.companies.map((company: Company, index: number) => (
                            <div key={index} className="company-card">
                                <div className="company-logo">{company.logo}</div>
                                <div className="company-name">{company.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="success-stories">
                    <h3 className="success-heading">{placements.successStoriesHeading}</h3>
                    <div className="success-grid">
                        {placements.successStories.map((story: SuccessStory, index: number) => (
                            <div key={index} className="success-card">
                                <div className="success-icon">{story.icon}</div>
                                <h4>{story.title}</h4>
                                <p>{story.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
