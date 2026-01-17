'use client';

import { useState } from 'react';
import './FAQ.css';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface FAQProps {
    subdomain: string;
}

// Import FAQ data
import faqData from '@/data/faqs.json';

export default function FAQ({ subdomain }: FAQProps) {
    const [openId, setOpenId] = useState<number | null>(null);

    const faqs: FAQItem[] = faqData[subdomain as keyof typeof faqData] || [];

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2>
                        Frequently Asked <span className="text-highlight">Questions</span>
                    </h2>
                    <p className="faq-subtitle">
                        Find answers to common questions about our {subdomain === 'training' ? 'training programs' : 'repair services'}
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${openId === faq.id ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(faq.id)}
                                aria-expanded={openId === faq.id}
                            >
                                <span className="faq-question-text">{faq.question}</span>
                                <span className="faq-icon">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {openId === faq.id ? (
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        ) : (
                                            <>
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </>
                                        )}
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
