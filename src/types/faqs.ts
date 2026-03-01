export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export interface FAQData {
    training: FAQItem[];
    services: FAQItem[];
}
