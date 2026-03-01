'use client';

import React, { useState } from 'react';
import FeatureCard from '@/components/FeatureCard/FeatureCard';
import { Icons } from '@/components/Icons';
import coursesContent from '@/data/training/courses.json';
import type { CoursesContent } from '@/types';
import './courses.css';

const data = coursesContent as CoursesContent;

const LEVELS = ['All', 'Beginner', 'Advanced', 'Professional'] as const;

export default function CoursesPage() {
    const { courses } = data;
    const [activeTab, setActiveTab] = useState<string>('All');

    const filteredCourses = activeTab === 'All'
        ? courses.items
        : courses.items.filter((course) => course.level === activeTab);

    return (
        <main className="courses-page">
            <div className="container">
                <div className="courses-header">
                    <h1>{courses.title} <span className="text-highlight">{courses.titleHighlight}</span></h1>
                    <p>{courses.subtitle}</p>
                </div>

                {/* Tab Filters */}
                <div className="tabs-container">
                    {LEVELS.map((level) => (
                        <button
                            key={level}
                            className={`tab-button${activeTab === level ? ' active' : ''}`}
                            onClick={() => setActiveTab(level)}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Course Cards */}
                <div className="courses-list">
                    {filteredCourses.map((course) => (
                        <FeatureCard
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            description={course.description}
                            icon={course.icon as keyof typeof Icons}
                            highlights={course.highlights}
                            url={course.slug ? `/courses/${course.slug}` : undefined}
                            buttonText="Explore More"
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
