"use client";
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import i18nConfig from '../../../i18nConfig';
import { useEffect, useState, useRef } from "react";
import pages from "../../../data/pages.json";

const LangSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const currentLocale = i18n.language;
    const dropdownRef = useRef(null);

    const router = useRouter();
    const currentPathname = usePathname();

    // Handle clicking outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    //   const langList = i18nConfig.locales;

    const languages = [
        {
            id: "en",
            label: "English",
        },
        {
            id: "id",
            label: "Indonesia",
        },
    ];

    // Function to get localized slug for a given page
    const getLocalizedSlug = (currentSlug, targetLocale) => {
        // Find the page that contains the current slug
        for (const [pageKey, pageData] of Object.entries(pages)) {
            // Check if current slug matches any locale's slug for this page
            for (const [locale, localeData] of Object.entries(pageData)) {
                if (localeData.slug === currentSlug) {
                    // Return the target locale's slug for this page
                    return pageData[targetLocale]?.slug || pageKey;
                }
            }
        }
        // If no match found, return the current slug
        return currentSlug;
    };

    // Function to generate the new pathname with localized slug
    const generateLocalizedPath = (currentPath, currentLocale, targetLocale) => {
        // Extract the slug from the current path
        const pathParts = currentPath.split('/');
        const currentSlug = pathParts[pathParts.length - 1];
        // console.log('currentLocale', currentLocale);
        if (currentLocale === 'id') {
            if (pathParts.length >= 3) {
                const localizedSlug = getLocalizedSlug(currentSlug, targetLocale);
                return `/${targetLocale}/${localizedSlug}`;
            } else {
                return `/${targetLocale}`;
            }
        } else if (currentLocale === 'en') {
            if (pathParts.length >= 2) {
                const localizedSlug = getLocalizedSlug(currentSlug, targetLocale);
                return `/${targetLocale}/${localizedSlug}`;
            } else {
                return `/${targetLocale}`;
            }
        }
        // // If we're on the home page (just locale)
        // if (pathParts.length === 2 && currentLocale == 'en') {
        //     return `/${targetLocale}`;
        // }
        
        // // If we have a slug, get the localized version
        // if (pathParts.length >= 3 && currentLocale === 'id') {
        //     const localizedSlug = getLocalizedSlug(currentSlug, targetLocale);
        //     return `/${targetLocale}/${localizedSlug}`;
        // }
        
        // Fallback
        return `/${targetLocale}`;
    };

    const handleChange = e => {
        const newLocale = e;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // Generate the new localized path
        const newPath = generateLocalizedPath(currentPathname, currentLocale, newLocale);
        
        // Navigate to the new path
        router.push(newPath);
        setIsOpen(false);
        router.refresh();
    };

    return (
        <div className="header__lang-switcher" ref={dropdownRef}>
            <div className={`header__lang-switcher-current ${isOpen ? "is-open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_2004_554" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                        <rect width={24} height={24} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2004_554)">
                        <path d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 11.8833 19.9958 11.7625 19.9875 11.6375C19.9792 11.5125 19.975 11.4083 19.975 11.325C19.8917 11.8083 19.6667 12.2083 19.3 12.525C18.9333 12.8417 18.5 13 18 13H16C15.45 13 14.9792 12.8042 14.5875 12.4125C14.1958 12.0208 14 11.55 14 11V10H10V8C10 7.45 10.1958 6.97917 10.5875 6.5875C10.9792 6.19583 11.45 6 12 6H13C13 5.61667 13.1042 5.27917 13.3125 4.9875C13.5208 4.69583 13.775 4.45833 14.075 4.275C13.7417 4.19167 13.4042 4.125 13.0625 4.075C12.7208 4.025 12.3667 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12H9C10.1 12 11.0417 12.3917 11.825 13.175C12.6083 13.9583 13 14.9 13 16V17H10V19.75C10.3333 19.8333 10.6625 19.8958 10.9875 19.9375C11.3125 19.9792 11.65 20 12 20Z" fill="white" />
                    </g>
                </svg>
                <span>
                    {currentLocale}
                </span>
                <div className="header__lang-switcher-current-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_2004_558" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                            <rect width={24} height={24} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_2004_558)">
                            <path d="M11.475 14.475L7.85001 10.85C7.80001 10.8 7.76251 10.7458 7.73751 10.6875C7.71251 10.6292 7.70001 10.5667 7.70001 10.5C7.70001 10.3667 7.74585 10.25 7.83751 10.15C7.92918 10.05 8.05001 10 8.20001 10H15.8C15.95 10 16.0708 10.05 16.1625 10.15C16.2542 10.25 16.3 10.3667 16.3 10.5C16.3 10.5333 16.25 10.65 16.15 10.85L12.525 14.475C12.4417 14.5583 12.3583 14.6167 12.275 14.65C12.1917 14.6833 12.1 14.7 12 14.7C11.9 14.7 11.8083 14.6833 11.725 14.65C11.6417 14.6167 11.5583 14.5583 11.475 14.475Z" fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="header__lang-switcher-list">
                    {languages.map((item) => (
                        <div key={item.id} onClick={() => handleChange(item.id)} className={`header__lang-switcher-list-item ${currentLocale === item.id ? "is-active" : ""}`}>
                            <span>
                                {item.label}
                            </span>
                            {currentLocale === item.id && (
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                    <mask id="mask0_2024_554" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                        <rect width={20} height={20} fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_2024_554)">
                                        <path d="M7.95842 12.625L15.0209 5.5625C15.1876 5.39583 15.382 5.3125 15.6043 5.3125C15.8265 5.3125 16.0209 5.39583 16.1876 5.5625C16.3543 5.72917 16.4376 5.92708 16.4376 6.15625C16.4376 6.38542 16.3543 6.58333 16.1876 6.75L8.54176 14.4167C8.37509 14.5833 8.18065 14.6667 7.95842 14.6667C7.7362 14.6667 7.54176 14.5833 7.37509 14.4167L3.79176 10.8333C3.62509 10.6667 3.54523 10.4688 3.55217 10.2396C3.55912 10.0104 3.64592 9.8125 3.81259 9.64583C3.97926 9.47917 4.17717 9.39583 4.40634 9.39583C4.63551 9.39583 4.83342 9.47917 5.00009 9.64583L7.95842 12.625Z" fill="#F38D1E" />
                                    </g>
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LangSwitcher;