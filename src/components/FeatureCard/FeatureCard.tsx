import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
    id: number | string;
    title: string;
    description: string;
    icon: keyof typeof Icons;
    image: string;
    url?: string;
    buttonText?: string;
}

export default function FeatureCard({ id, title, description, icon, image, url, buttonText = 'Learn More' }: FeatureCardProps) {
    const IconComponent = Icons[icon];

    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                {/* Left Content */}
                <div className={styles.content}>
                    {/* Icon */}
                    <div className={styles.iconWrapper}>
                        <div className={styles.iconBox}>
                            <IconComponent className={styles.icon} />
                        </div>
                    </div>

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


                {/* Right Image with blend effect - positioned absolutely to blend into card */}
                {image && (
                    <div className={styles.imageContainerDesktop}>
                        {/* Gradient overlay for blending from left to right */}
                        <div className={styles.imageOverlay} />

                        {/* Image */}

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
            </div>
        </div>
    );
}
