import type { Metadata } from 'next';
import commonContent from '@/data/common-content.json';
import type { CommonContent } from '@/types';
import './globals.css';

const { seo } = commonContent as CommonContent;
const globalSeo = seo.global;

export const metadata: Metadata = {
  metadataBase: new URL(globalSeo.metadataBase),
  title: {
    default: globalSeo.defaultTitle,
    template: globalSeo.titleTemplate,
  },
  description: globalSeo.defaultDescription,
  keywords: globalSeo.defaultKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
