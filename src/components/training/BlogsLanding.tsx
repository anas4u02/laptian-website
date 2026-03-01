'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import blogsContent from '@/data/blogs-content.json';
import type { BlogsContent } from '@/types';
import './blogs.css';

const data = blogsContent as BlogsContent;

const CATEGORIES = data.blogs.categories;

export default function BlogsLanding() {
    const { blogs } = data;
    const [activeTab, setActiveTab] = useState<string>('All');

    const filteredPosts = activeTab === 'All'
        ? blogs.items
        : blogs.items.filter((post) => post.category === activeTab);

    return (
        <main className="blogs-page">
            <div className="container">
                <div className="blogs-header">
                    <h1>{blogs.title} <span className="text-highlight">{blogs.titleHighlight}</span></h1>
                    <p>{blogs.subtitle}</p>
                </div>

                {/* Category Tab Filters */}
                <div className="tabs-container">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            className={`tab-button${activeTab === category ? ' active' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Post Cards */}
                <div className="blogs-grid">
                    {filteredPosts.map((post) => (
                        <Link href={`/blogs/${post.slug}`} key={post.id} className="blog-card">
                            <div className="blog-card-image">
                                <div className="blog-card-image-placeholder">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                {post.youtubeEmbedUrl && (
                                    <span className="blog-card-video-badge">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        Video
                                    </span>
                                )}
                            </div>
                            <div className="blog-card-body">
                                <div className="blog-card-meta">
                                    <span className="blog-card-category">{post.category}</span>
                                    <span className="blog-card-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                <div className="blog-card-footer">
                                    <span className="blog-card-author">By {post.author}</span>
                                    <span className="blog-card-read-more">Read More →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
