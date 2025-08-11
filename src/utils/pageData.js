import { notFound } from 'next/navigation';

export async function getPageData(slug) {
    try {
        // Try to import the page data based on slug
        const pageData = await import(`@/data/pages/${slug}.json`);
        return pageData.default;
    } catch (error) {
        // If the page data file doesn't exist, throw not found
        notFound();
    }
} 