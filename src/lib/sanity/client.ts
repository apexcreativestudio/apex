const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const isSanityConfigured = Boolean(projectId);

export async function fetchSanityQuery<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!isSanityConfigured) return null;

  try {
    const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
    url.searchParams.set('query', query);
    Object.entries(params).forEach(([key, val]) => {
      url.searchParams.set(`$${key}`, JSON.stringify(val));
    });

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 }
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.result as T;
  } catch (err) {
    console.error('Sanity fetch error:', err);
    return null;
  }
}
