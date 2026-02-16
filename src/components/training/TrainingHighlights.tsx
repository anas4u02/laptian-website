import React from 'react';
import trainingContent from '@/data/training-content.json';
import './TrainingHighlights.css';

export default function TrainingHighlights() {
    const { trainingHighlights } = trainingContent;

    return (
        <section className="section training-highlights-section">
            <div className="container">
                {trainingHighlights.map((block, index) => (
                    <div key={index} className="highlights-block">
                        <div className="highlights-header">
                            <h2>{block.title} <span className="text-highlight">{block.titleHighlight}</span></h2>
                            <p>{block.description}</p>
                            {block.subdescription && (
                                <p className="highlights-subdesc">{block.subdescription}</p>
                            )}
                        </div>

                        <div className="highlights-grid">
                            {block.points.map((point, pIndex) => (
                                <div key={pIndex} className="highlight-card">
                                    <div className="highlight-card-icon">{point.icon}</div>
                                    <p className="highlight-card-text">{point.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
