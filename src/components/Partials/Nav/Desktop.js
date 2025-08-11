"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Desktop = ({ navItems }) => {
    const { t } = useTranslation();
    const pathname = usePathname();
    
    return (
        <nav className="header__nav-desktop">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
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