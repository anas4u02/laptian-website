import Link from 'next/link';

export const metadata = {
    title: 'Page Not Found - Laptian',
    description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: 'var(--spacing-8)',
            textAlign: 'center' as const,
            background: 'var(--color-bg-primary)',
        }}>
            <h1 style={{
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 'var(--spacing-4)',
                lineHeight: 1,
            }}>
                404
            </h1>
            <h2 style={{
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-4)',
            }}>
                Page Not Found
            </h2>
            <p style={{
                fontSize: 'var(--font-size-lg)',
                color: 'var(--color-text-secondary)',
                maxWidth: '500px',
                marginBottom: 'var(--spacing-8)',
            }}>
                Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    padding: 'var(--spacing-3) var(--spacing-6)',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    color: 'white',
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: 'var(--font-size-lg)',
                    transition: 'opacity 0.2s ease',
                }}
            >
                ← Go Back Home
            </Link>
        </div>
    );
}
