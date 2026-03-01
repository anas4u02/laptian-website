import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
    id: number | string;
    title: string;
    description: string;
    icon?: keyof typeof Icons;
    image?: string;
    highlights?: string[];
    url?: string;
    buttonText?: string;
}

export default function FeatureCard({ id, title, description, icon, image, highlights, url, buttonText = 'Learn More' }: FeatureCardProps) {
    const IconComponent = icon ? Icons[icon] : null;

    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                {/* Left Content */}
                <div className={styles.content}>
                    {/* Icon */}
                    {IconComponent && (
                        <div className={styles.iconWrapper}>
                            <div className={styles.iconBox}>
                                <IconComponent className={styles.icon} />
                            </div>
                        </div>
                    )}

                    {/* Title */}
                    <h3 className={styles.title}>
                        {title}
                    </h3>

                    {/* Description */}
                    <p className={styles.description}>
                        {description}
                    </p>

                    {/* Button */}
                    {url && (
                        <Link href={url} className={styles.button}>
                            {buttonText}
                            <Icons.ArrowRight className={styles.buttonIcon} />
                        </Link>
                    )}
                </div>

                {/* Right side: Highlights list OR Image */}
                {highlights && highlights.length > 0 ? (
                    <>
                        {/* Desktop Highlights */}
                        <div className={styles.highlightsContainerDesktop}>
                            <h4 className={styles.highlightsTitle}>Course Highlights</h4>
                            <ul className={styles.highlightsList}>
                                {highlights.map((item, index) => (
                                    <li key={index} className={styles.highlightItem}>
                                        <Icons.CircleCheck className={styles.highlightIcon} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Mobile Highlights */}
                        <div className={styles.highlightsContainerMobile}>
                            <h4 className={styles.highlightsTitle}>Course Highlights</h4>
                            <ul className={styles.highlightsList}>
                                {highlights.map((item, index) => (
                                    <li key={index} className={styles.highlightItem}>
                                        <Icons.CircleCheck className={styles.highlightIcon} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Right Image with blend effect */}
                        {image && (
                            <div className={styles.imageContainerDesktop}>
                                <div className={styles.imageOverlay} />
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className={styles.image}
                                        priority
                                    />
                                </div>
                            </div>
                        )}
                        {/* Mobile Image */}
                        {image && (
                            <div className={styles.imageContainerMobile}>
                                <div className={styles.imageOverlayMobile} />
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className={styles.image}
                                    priority
                                />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
