import { notFound } from 'next/navigation';
import pages from '@/data/pages.json';
import { fetchData } from '@/services/api';

// Function to get the canonical page key from a localized slug
export function getPageKeyFromSlug(slug, locale = 'en') {
    for (const [pageKey, pageData] of Object.entries(pages)) {
        if (pageData[locale]?.slug === slug) {
            return pageKey;
        }
    }
    return null;
}

// Function to get localized slug for a page
export function getLocalizedSlug(pageKey, locale) {
    return pages[pageKey]?.[locale]?.slug || pageKey;
}

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

// Enhanced function that can handle localized slugs
export async function getPageDataByLocalizedSlug(slug, locale = 'en') {
    try {
        // First, try to get the canonical page key from the localized slug
        const pageKey = getPageKeyFromSlug(slug, locale);
        
        if (pageKey) {
            // console.log('pageKey', pageKey);
            // Import the page data using the canonical page key
            const pageData = await import(`@/data/pages/${pageKey}.json`);
            return pageData.default;
        }
        
        // Fallback: try to import directly with the slug
        const pageData = await import(`@/data/pages/${slug}.json`);
        return pageData.default;
    } catch (error) {
        // If the page data file doesn't exist, throw not found
        notFound();
    }
} 