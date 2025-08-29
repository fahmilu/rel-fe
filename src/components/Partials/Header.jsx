"use client";
import { Desktop, Mobile } from "./Nav";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getLocalizedNavigationItems } from "@/utils/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    
    // Get localized navigation items
    const navItems = getLocalizedNavigationItems(currentLocale);

  return (
    <header className={`header ${isMenuOpen ? 'open-menu' : ''}`}>
        <div className="container">
            <Link href={`/${currentLocale}`} className="header__logo">
                <Image src="/imgs/logo.png" alt="Logo" fill className="object-contain" />
            </Link>
            <Desktop navItems={navItems} />
            <Mobile navItems={navItems} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="hidden lg:block">
                <LangSwitcher />
            </div>
        </div>
    </header>
  );
};

export default Header;