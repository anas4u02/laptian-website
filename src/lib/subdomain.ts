import { headers } from 'next/headers';

export async function getSubdomain(): Promise<'training' | 'services'> {
    const headersList = await headers();
    const subdomain = headersList.get('x-subdomain') || 'training';

    return subdomain === 'services' ? 'services' : 'training';
}
