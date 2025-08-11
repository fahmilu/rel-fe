"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useState } from "react";
import LangSwitcher from "../LangSwitcher";

const Mobile = ({ navItems }) => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
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
                    {navItems.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            onClick={closeMenu}
                            className="mobile-nav-item"
                        >
                            {t(item.label)}
                        </Link>
                    ))}
                    <Link 
                        href="/quote" 
                        onClick={closeMenu}
                        className="btn btn-primary"
                    >
                        {t("home.button.quote")}
                    </Link>
                </div>
                <div className="mobile-lang-switcher">
                    <LangSwitcher />
                </div>
            </nav>
        </div>
    );
}

export default Mobile;