import React from 'react';
import type { AboutUsCard as AboutUsCardType, RichTextSegment, ContentBlock } from '@/types';
import styles from './AboutUsCard.module.css';

interface AboutUsCardProps {
    card: AboutUsCardType;
}

function RichText({ segments }: { segments: RichTextSegment[] }) {
    return (
        <>
            {segments.map((segment, i) =>
                segment.highlight ? (
                    <span key={i} className="text-highlight">{segment.text}</span>
                ) : (
                    <React.Fragment key={i}>{segment.text}</React.Fragment>
                )
            )}
        </>
    );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case 'description':
            return (
                <p className={styles.description}>
                    <RichText segments={block.richText} />
                </p>
            );
        case 'subheader':
            return <h3 className={styles.subheader}>{block.text}</h3>;
        case 'bullets':
            return (
                <ul className={styles.bulletList}>
                    {block.items.map((item, index) => (
                        <li key={index} className={styles.bulletItem}>
                            <span className={styles.bulletIcon}>✓</span>
                            <span>
                                <RichText segments={item} />
                            </span>
                        </li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
}

export default function AboutUsCard({ card }: AboutUsCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <h2 className={styles.header}>{card.header}</h2>
                <div className={styles.content}>
                    {card.content.map((block, index) => (
                        <ContentBlockRenderer key={index} block={block} />
                    ))}
                </div>
            </div>
        </div>
    );
}
