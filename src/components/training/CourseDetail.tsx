import React from 'react';
import Link from 'next/link';
import './CourseDetail.css';

interface Course {
    id: number;
    title: string;
    slug: string;
    duration: string;
    level: string;
    price?: string;
    description: string;
    highlights: string[];
    detailedDescription: string;
    whoShouldEnroll: string[];
    practicalTraining: string;
    curriculum: string[];
    careerOutcomes: string[];
}

interface CourseDetailProps {
    course: Course;
}

export default function CourseDetail({ course }: CourseDetailProps) {
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
                            <div className="course-meta-item">
                                <span className="meta-icon">💰</span>
                                <div>
                                    <div className="meta-label">Investment</div>
                                    <div className="meta-value">{course?.price}</div>
                                </div>
                            </div>
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

            {/* Who Should Enroll Section */}
            <section className="course-section course-audience">
                <div className="container">
                    <h2>
                        Who Should <span className="text-highlight">Enroll</span>
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
                                <span className="curriculum-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
            <section className="course-section course-future">
                <div className="container">
                    <h2>
                        Prepare Yourself for the <span className="text-highlight">Future</span> of Laptop Repair
                    </h2>
                    <div className="future-content">
                        <p>
                            The laptop repair industry is evolving rapidly with new technologies, components, and repair techniques emerging constantly. Our training program keeps pace with these changes, ensuring you're always ahead of the curve.
                        </p>
                        <div className="future-stats">
                            <div className="future-stat">
                                <div className="stat-value">₹50K+</div>
                                <div className="stat-label">Average Monthly Earnings</div>
                            </div>
                            <div className="future-stat">
                                <div className="stat-value">95%</div>
                                <div className="stat-label">Placement Success Rate</div>
                            </div>
                            <div className="future-stat">
                                <div className="stat-value">2500+</div>
                                <div className="stat-label">Successful Graduates</div>
                            </div>
                        </div>
                        <p>
                            With the increasing complexity of modern laptops and the growing demand for skilled technicians, now is the perfect time to invest in your laptop repair career. Join Laptian Technical Institue and become part of a thriving community of successful repair professionals.
                        </p>
                    </div>
                </div>
            </section>

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
