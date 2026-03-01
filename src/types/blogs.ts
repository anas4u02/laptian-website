export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string[];
    author: string;
    date: string;
    category: string;
    tags: string[];
    youtubeEmbedUrl?: string | null;
    image: string;
}

export interface BlogsSection {
    title: string;
    titleHighlight: string;
    subtitle: string;
    categories: string[];
    items: BlogPost[];
}

export interface BlogsContent {
    blogs: BlogsSection;
}
