import React from 'react';
import trainingContent from '@/data/training-content.json';
import './SkillsMastery.css';

export default function SkillsMastery() {
    const { skillsMastery } = trainingContent;

    return (
        <section className="section skills-mastery-section">
            <div className="container">
                {skillsMastery.map((block, index) => (
                    <div key={index} className={`skills-block ${index % 2 !== 0 ? 'skills-block-reverse' : ''}`}>
                        <div className="skills-text-content">
                            <h2>{block.title} <span className="text-highlight">{block.titleHighlight}</span></h2>
                            <p className="skills-description">{block.description}</p>
                            {'subdescription' in block && block.subdescription && (
                                <p className="skills-subdesc">{block.subdescription}</p>
                            )}
                        </div>
                        <div className="skills-points-content">
                            {block.subtitle && (
                                <h3 className="skills-subtitle">{block.subtitle}</h3>
                            )}
                            <div className="skills-list">
                                {block.points.map((point, pIndex) => (
                                    <div key={pIndex} className="skills-list-item">
                                        <span className="skills-number">{String(pIndex + 1).padStart(2, '0')}</span>
                                        <span className="skills-list-text">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
