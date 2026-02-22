'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import commonContent from '@/data/common-content.json';
import './Header.css';

interface HeaderProps {
    subdomain: 'training' | 'services';
}

export default function Header({ subdomain }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { navigation, seo } = commonContent;
    const links = navigation[subdomain];
    const siteName = seo[subdomain].siteNameShort;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <Link href="/" className="logo">
                        <span className="logo-text">
                            Laptian <span className="text-highlight">{subdomain === 'training' ? 'Institue' : 'Repair'}</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        <ul className="nav-list">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="nav-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link href="/contact" className="btn btn-primary btn-sm">
                            {subdomain === 'training' ? 'Enroll Now' : 'Book Repair'}
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="nav-mobile">
                        <ul className="nav-list-mobile">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="nav-link-mobile"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}
