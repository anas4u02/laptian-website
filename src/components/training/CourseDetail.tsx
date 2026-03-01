'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { Course } from '@/types';
import './CourseDetail.css';

interface CourseDetailProps {
    course: Course;
}

export default function CourseDetail({ course }: CourseDetailProps) {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="course-detail">
            {/* Hero Section */}
            <section className="course-hero">
                <div className="container">
                    <div className="course-hero-content">
                        <div className="course-badge">{course.level}</div>
                        <h1 className="course-title">{course.title}</h1>
                        <p className="course-description">{course.description}</p>

                        <div className="course-meta-grid">
                            <div className="course-meta-item">
                                <span className="meta-icon">⏱️</span>
                                <div>
                                    <div className="meta-label">Duration</div>
                                    <div className="meta-value">{course.duration}</div>
                                </div>
                            </div>
                            <div className="course-meta-item">
                                <span className="meta-icon">📊</span>
                                <div>
                                    <div className="meta-label">Level</div>
                                    <div className="meta-value">{course.level}</div>
                                </div>
                            </div>
                            {course.price && (
                                <div className="course-meta-item">
                                    <span className="meta-icon">💰</span>
                                    <div>
                                        <div className="meta-label">Investment</div>
                                        <div className="meta-value">{course?.price}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="course-cta-group">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Enroll Now
                            </Link>
                            <Link href="/#courses" className="btn btn-secondary btn-lg">
                                View All Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is [Course Name] Section */}
            <section className="course-section course-about">
                <div className="container">
                    <h2>
                        What is <span className="text-highlight">{course.title}</span>?
                    </h2>
                    <p className="section-description">{course.detailedDescription}</p>
                </div>
            </section>

            {/* Course Highlights / Curriculum Section */}
            <section className="course-section course-curriculum">
                <div className="container">
                    <h2>
                        Course <span className="text-highlight">Highlights</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive curriculum designed to make you industry-ready
                    </p>
                    <div className="curriculum-grid">
                        {course.curriculum.map((item, index) => (
                            <div key={index} className="curriculum-item">
                                <span className="curriculum-number">{String(index + 1).padStart(2, '0')}</span>
                                <div className="curriculum-content">
                                    <h4 className="curriculum-title">{item.title}</h4>
                                    <p className="curriculum-description">{item.description}</p>
                                    {item.bulletPoints && item.bulletPoints.length > 0 && (
                                        <ul className="curriculum-bullets">
                                            {item.bulletPoints.map((point, pIndex) => (
                                                <li key={pIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Should Enroll Section */}
            <section className="course-section course-audience">
                <div className="container">
                    <h2>
                        Who Should <span className="text-highlight">Enroll</span> in this Laptop Repair Course?
                    </h2>
                    <p className="section-subtitle">
                        This course is perfect for individuals who are:
                    </p>
                    <div className="audience-grid">
                        {course.whoShouldEnroll.map((item, index) => (
                            <div key={index} className="audience-card">
                                <span className="audience-icon">✓</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Why Practical Training Section */}
            <section className="course-section course-practical">
                <div className="container">
                    <h2>
                        Why <span className="text-highlight">Practical Training</span> Makes the Difference
                    </h2>
                    <div className="practical-content">
                        <div className="practical-text">
                            <p>{course.practicalTraining}</p>
                        </div>
                        <div className="practical-benefits">
                            <div className="benefit-item">
                                <span className="benefit-icon">🔧</span>
                                <h4>Real Equipment</h4>
                                <p>Work with actual laptops from leading brands</p>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">👨‍🏫</span>
                                <h4>Expert Guidance</h4>
                                <p>Learn from industry veterans with 15+ years experience</p>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">🎯</span>
                                <h4>Hands-On Projects</h4>
                                <p>Build confidence through real repair scenarios</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Content Accordion Section */}
            {course.courseContent && course.courseContent.length > 0 && (
                <section className="course-section course-content-section">
                    <div className="container">
                        <h2>
                            Course <span className="text-highlight">Content</span>
                        </h2>
                        <p className="section-subtitle">
                            Explore what you&apos;ll learn in each module
                        </p>
                        <div className="accordion-container">
                            {course.courseContent.map((module, index) => (
                                <div
                                    key={index}
                                    className={`accordion-item ${openAccordion === index ? 'accordion-open' : ''}`}
                                >
                                    <button
                                        className="accordion-header"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={openAccordion === index}
                                    >
                                        <span className="accordion-title">{module.title}</span>
                                        <span className="accordion-icon">
                                            {openAccordion === index ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div className="accordion-body">
                                        <p className="accordion-description">{module.description}</p>
                                        <ul className="accordion-topics">
                                            {module.topics.map((topic, tIndex) => (
                                                <li key={tIndex}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}



            {/* Level Up Your Career Section */}
            <section className="course-section course-career">
                <div className="container">
                    <h2>
                        Level Up Your <span className="text-highlight">Career</span> with Laptian
                    </h2>
                    <p className="section-subtitle">
                        Transform your future with industry-recognized skills and certifications
                    </p>
                    <div className="career-grid">
                        {course.careerOutcomes.map((outcome, index) => (
                            <div key={index} className="career-card">
                                <span className="career-icon">🚀</span>
                                <p>{outcome}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future of Laptop Repair Section */}
            {course.futureSection && (
                <section className="course-section course-future">
                    <div className="container">
                        <h2 dangerouslySetInnerHTML={{
                            __html: course.futureSection.heading
                                .replace('<highlight>', '<span class="text-highlight">')
                                .replace('</highlight>', '</span>')
                        }} />
                        <div className="future-content">
                            <p>{course.futureSection.description}</p>
                            <div className="future-stats">
                                {course.futureSection.stats.map((stat, index) => (
                                    <div key={index} className="future-stat">
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <p>{course.futureSection.closingText}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA Section */}
            <section className="course-section course-final-cta">
                <div className="container">
                    <div className="final-cta-content">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>
                            Join thousands of successful technicians who transformed their careers with Laptian Technical Institue
                        </p>
                        <div className="final-cta-buttons">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Enroll in {course.title}
                            </Link>
                            <Link href="/#courses" className="btn btn-secondary btn-lg">
                                View All Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
