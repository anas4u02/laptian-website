import React from 'react';
import trainingContent from '@/data/training-content.json';
import type { TrainingContent } from '@/types';
import './Testimonials.css';

const data = trainingContent as TrainingContent;

export default function Testimonials() {
    const { testimonials } = data;

    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2>{testimonials.title} <span className="text-highlight">{testimonials.titleHighlight}</span></h2>
                    <p>{testimonials.subtitle}</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.reviews.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card card">
                            <div className="star-rating">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.image}</div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.name}</div>
                                    <div className="author-role">{testimonial.role}</div>
                                    <div className="author-company">{testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
