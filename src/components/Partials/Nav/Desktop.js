"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Desktop = ({ navItems }) => {
    const { t } = useTranslation();
    const pathname = usePathname();
    console.log('navItems', navItems);
    // Helper to check if current path matches or starts with nav item href
    const isNavItemActive = (href) => {
        // Remove trailing slash for comparison
        const normalize = (str) => str.replace(/\/+$/, '');
        // If href is root, only match exact root
        if (href === "/") return pathname === "/";
        // Otherwise, match if pathname starts with href + "/" or is exactly href
        return normalize(pathname).startsWith(normalize(href)) && (
            normalize(pathname) === normalize(href) ||
            normalize(pathname).startsWith(normalize(href) + "/")
        );
    };

    return (
        <nav className="header__nav-desktop">
            {navItems.map((item) => {
                const isActive = isNavItemActive(item.href);
                return (
                    <Link 
                        key={item.href} 
                        href={item.href} 
                        className={`header__nav-item ${isActive ? 'header__nav-item--active' : ''}`}
                    >
                        {t(item.label)}
                    </Link>
                );
            })}
            <Link href="/quote" className="header__nav-item btn btn__secondary">
                {t("home.button.quote")}
            </Link>
        </nav>
    );
}

export default Desktop;