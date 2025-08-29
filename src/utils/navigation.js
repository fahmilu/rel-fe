import pages from '@/data/pages.json';

// Navigation configuration with page keys
export const navigationConfig = [
    {
        key: 'product',
        label: 'nav.products',
    },
    {
        key: 'industries',
        label: 'nav.industry',
    },
    {
        key: 'projects',
        label: 'nav.projects',
    },
    {
        key: 'contact-us',
        label: 'nav.contact',
    }
];

// Function to get localized navigation items for a specific locale
export function getLocalizedNavigationItems(locale) {
    const href = locale === 'id' ? `/${locale}` : ``;
    return navigationConfig.map(item => ({
        ...item,
        href: `${href}/${pages[item.key]?.[locale]?.slug || item.key}`,
        label: item.label
    }));
}

// Function to get localized href for a specific page
export function getLocalizedHref(pageKey, locale) {
    return `/${locale}/${pages[pageKey]?.[locale]?.slug || pageKey}`;
}

// Function to get the canonical page key from a localized slug
export function getPageKeyFromSlug(slug, locale) {
    for (const [pageKey, pageData] of Object.entries(pages)) {
        if (pageData[locale]?.slug === slug) {
            return pageKey;
        }
    }
    return null;
}
