import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://laptian.com'),
  title: {
    default: 'Laptian - Laptop Repair Training & Services',
    template: '%s | Laptian',
  },
  description: 'Professional laptop repair training and expert repair services',
  keywords: ['laptop repair', 'training', 'certification', 'repair services'],
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
