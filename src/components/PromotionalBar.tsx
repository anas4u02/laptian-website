'use client';

import React, { useState, useEffect } from 'react';
import './PromotionalBar.css';

interface PromotionalBarProps {
    offerText: string;
    targetDate: string; // ISO date string
}

export default function PromotionalBar({ offerText, targetDate }: PromotionalBarProps) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate).getTime() - new Date().getTime();

            if (difference <= 0) {
                setIsExpired(true);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!isVisible || isExpired) {
        return null;
    }

    return (
        <div className="promotional-bar">
            <div className="container">
                <div className="promotional-content">
                    <div className="offer-text">
                        <span className="offer-icon">🎉</span>
                        <span>{offerText}</span>
                    </div>

                    <div className="countdown">
                        <div className="countdown-item">
                            <span className="countdown-value">{timeLeft.days}</span>
                            <span className="countdown-label">Days</span>
                        </div>
                        <span className="countdown-separator">:</span>
                        <div className="countdown-item">
                            <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="countdown-label">Hours</span>
                        </div>
                        <span className="countdown-separator">:</span>
                        <div className="countdown-item">
                            <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="countdown-label">Mins</span>
                        </div>
                        <span className="countdown-separator">:</span>
                        <div className="countdown-item">
                            <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="countdown-label">Secs</span>
                        </div>
                    </div>

                    <button
                        className="close-button"
                        onClick={() => setIsVisible(false)}
                        aria-label="Close promotional banner"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    );
}
