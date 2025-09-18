"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import LangSwitcher from "../LangSwitcher";
import { usePathname } from "next/navigation";

const Mobile = ({ navItems, isMenuOpen, setIsMenuOpen }) => {
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const pathname = usePathname();

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
        <div className="header__mobile-menu">
            <button 
                className="header__mobile-toggle"
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
            >
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
            
            <nav className={`header__nav-mobile ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {navItems.slice(0, -1).map((item) => {
                        const isActive = isNavItemActive(item.href);
                        return (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            onClick={closeMenu}
                            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                        >
                            {t(item.label)}
                        </Link>
                    )})}
                    <Link 
                        href={navItems[navItems.length - 1].href} 
                        onClick={closeMenu}
                        className="btn btn-primary"
                    >
                        {t("home.button.quote")}
                    </Link>
                    <div className="mobile-lang-switcher">
                        <LangSwitcher isMobile={true} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Mobile;