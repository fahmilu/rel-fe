import { notFound } from 'next/navigation';

export async function getDetailData(slug) {
    try {
        // Try to import the page data based on slug
        const pageData = await import(`@/data/details/${slug}.json`);
        return pageData.default;
    } catch (error) {
        // If the page data file doesn't exist, throw not found
        notFound();
    }
} 