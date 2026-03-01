export interface CurriculumItem {
    title: string;
    description: string;
    bulletPoints?: string[];
}

export interface CourseContentModule {
    title: string;
    description: string;
    topics: string[];
}

export interface FutureSectionStat {
    value: string;
    label: string;
}

export interface FutureSection {
    heading: string;
    description: string;
    stats: FutureSectionStat[];
    closingText: string;
}

export interface Course {
    id: number;
    title: string;
    slug?: string;
    icon: string;
    image: string;
    duration: string;
    price?: string;
    level: string;
    description: string;
    highlights: string[];
    detailedDescription: string;
    whoShouldEnroll: string[];
    practicalTraining: string;
    curriculum: CurriculumItem[];
    courseContent?: CourseContentModule[];
    careerOutcomes: string[];
    futureSection?: FutureSection;
}

export interface CoursesSection {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Course[];
}

export interface CoursesContent {
    courses: CoursesSection;
}
