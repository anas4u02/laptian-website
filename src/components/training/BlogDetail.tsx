import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/types';
import './BlogDetail.css';

interface BlogDetailProps {
    post: BlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
    return (
        <main className="blog-detail-page">
            <div className="container">
                <Link href="/blogs" className="blog-back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Blogs
                </Link>

                <article className="blog-article">
                    <header className="blog-article-header">
                        <div className="blog-article-meta">
                            <span className="blog-article-category">{post.category}</span>
                            <span className="blog-article-date">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </span>
                        </div>
                        <h1 className="blog-article-title">{post.title}</h1>
                        <div className="blog-article-author">
                            <div className="blog-author-avatar">
                                {post.author.charAt(0)}
                            </div>
                            <span>By <strong>{post.author}</strong></span>
                        </div>
                    </header>

                    {/* YouTube Embed */}
                    {post.youtubeEmbedUrl && (
                        <div className="blog-video-container">
                            <iframe
                                src={post.youtubeEmbedUrl}
                                title={post.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="blog-video-iframe"
                            />
                        </div>
                    )}

                    {/* Article Content */}
                    <div className="blog-article-content">
                        {post.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="blog-article-tags">
                        {post.tags.map((tag) => (
                            <span key={tag} className="blog-tag">#{tag}</span>
                        ))}
                    </div>
                </article>
            </div>
        </main>
    );
}
