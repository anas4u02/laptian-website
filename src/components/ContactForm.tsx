'use client';

import React, { useState } from 'react';
import contactFormData from '@/data/contact-form.json';
import commonContent from '@/data/common-content.json';
import './ContactForm.css';

interface ContactFormProps {
    subdomain: 'training' | 'services';
}

export default function ContactForm({ subdomain }: ContactFormProps) {
    const { contact } = commonContent;
    const { form, info } = contactFormData.contact;
    const serviceOptions = form.fields.service.options[subdomain];
    const contactInfo = info[subdomain];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    subdomain,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                });

                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="section contact-form-section">
            <div className="container">
                <div className="contact-grid">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2>{contactInfo.heading}</h2>
                        <p className="contact-info-description">{contactInfo.description}</p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Address</h4>
                                    <p>
                                        {contact.address.street}<br />
                                        {contact.address.city}, {contact.address.state} {contact.address.zip}
                                    </p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-icon">✉️</div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-icon">🕐</div>
                                <div>
                                    <h4>Working Hours</h4>
                                    <p>{contactInfo.workingHours}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <h2>{form.heading}</h2>
                        <p className="form-subheading">{form.subheading}</p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">{form.fields.name.label} *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={form.fields.name.placeholder}
                                    required={form.fields.name.required}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{form.fields.email.label} *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={form.fields.email.placeholder}
                                    required={form.fields.email.required}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">{form.fields.phone.label} *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={form.fields.phone.placeholder}
                                    required={form.fields.phone.required}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">{form.fields.service.label} *</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required={form.fields.service.required}
                                >
                                    <option value="">{form.fields.service.placeholder}</option>
                                    {serviceOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{form.fields.message.label} *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={form.fields.message.placeholder}
                                    rows={5}
                                    required={form.fields.message.required}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-full"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : form.submitButton}
                            </button>

                            {status === 'success' && (
                                <div className="form-message form-message-success">
                                    ✓ {form.successMessage}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-message form-message-error">
                                    ✕ {form.errorMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
