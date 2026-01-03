import React from 'react';
import servicesContent from '@/data/services-content.json';
import './ProcessFlow.css';

export default function ProcessFlow() {
    const { processFlow } = servicesContent;

    return (
        <section className="section process-flow-section">
            <div className="container">
                <div className="section-header">
                    <h2>{processFlow.title} <span className="text-highlight">{processFlow.titleHighlight}</span></h2>
                    <p>{processFlow.subtitle}</p>
                </div>

                <div className="process-steps">
                    {processFlow.steps.map((step, index) => (
                        <div key={step.number} className="process-step">
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                            {index < processFlow.steps.length - 1 && <div className="step-arrow">→</div>}
                        </div>
                    ))}
                </div>

                <div className="process-cta">
                    <p>{processFlow.cta.text}</p>
                    <a href={processFlow.cta.buttonLink} className="btn btn-primary btn-lg">
                        {processFlow.cta.buttonText}
                    </a>
                </div>
            </div>
        </section>
    );
}
