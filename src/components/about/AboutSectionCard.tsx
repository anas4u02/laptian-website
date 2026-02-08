import React from 'react';
import Image from 'next/image';
import { Icons } from '@/components/Icons';
import styles from './AboutSectionCard.module.css';

interface AboutSectionCardProps {
    id: number | string;
    title: string;
    description: string;
    icon: keyof typeof Icons;
    image: string;
}

export default function AboutSectionCard({ id, title, description, icon, image }: AboutSectionCardProps) {
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
                </div>

                {/* Right Image with blend effect - positioned absolutely to blend into card */}
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

                {/* Mobile Image */}
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
            </div>
        </div>
    );
}
