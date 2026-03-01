'use client';

import React, { useState } from 'react';
import trainingContent from '@/data/training-content.json';
import type { TrainingContent } from '@/types';
import './Gallery.css';

const data = trainingContent as TrainingContent;

export default function Gallery() {
    const { gallery } = data;
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <section className="section gallery-section">
            <div className="container">
                <div className="section-header">
                    <h2>{gallery.title} <span className="text-highlight">{gallery.titleHighlight}</span></h2>
                    <p>{gallery.subtitle}</p>
                </div>

                <div className="gallery-grid">
                    {gallery.images.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => setSelectedImage(index)}
                        >
                            <img src={image.src} alt={image.alt} />
                            <div className="gallery-overlay">
                                <span className="gallery-title">{image.title}</span>
                                <span className="gallery-icon">🔍</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage !== null && (
                    <div className="lightbox" onClick={() => setSelectedImage(null)}>
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
                        <img
                            src={gallery.images[selectedImage].src}
                            alt={gallery.images[selectedImage].alt}
                            className="lightbox-image"
                        />
                        <div className="lightbox-nav">
                            <button
                                className="lightbox-prev"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage((selectedImage - 1 + gallery.images.length) % gallery.images.length);
                                }}
                            >
                                ←
                            </button>
                            <button
                                className="lightbox-next"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage((selectedImage + 1) % gallery.images.length);
                                }}
                            >
                                →
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
