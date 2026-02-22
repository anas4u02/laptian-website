import React from 'react';
import Link from 'next/link';
import './ServicesCards.css';
import coursesContent from '@/data/training/courses.json';

export default function ServicesCards() {
    const { courses } = coursesContent;

    return (
        <section className="section services-section">
            <div className="container">
                <div className="section-header">
                    <h2>{courses.title} <span className="text-highlight">{courses.titleHighlight}</span></h2>
                    <p>{courses.subtitle}</p>
                </div>

                <div className="services-grid">
                    {courses.items.map((course) => (
                        <div key={course.id} className="service-card card">
                            <div className="service-badge">{course.level}</div>
                            <h3 className="card-title">{course.title}</h3>
                            <div className="service-meta">
                                <span className="service-duration">
                                    <span className="meta-icon">⏱️</span>
                                    {course.duration}
                                </span>
                                {course?.price && (
                                    <span className="service-price">{course.price}</span>
                                )}
                            </div>
                            <p className="card-description">{course.description}</p>
                            <ul className="service-highlights">
                                {course.highlights.map((highlight, index) => (
                                    <li key={index}>
                                        <span className="highlight-icon">✓</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            {course.slug && (
                                <Link href={`/courses/${course.slug}`} className="btn btn-primary w-full mt-4">
                                    Learn More
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
