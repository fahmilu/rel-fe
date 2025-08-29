"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';
import { getLocalizedNavigationItems } from "@/utils/navigation";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    
    // Get localized navigation items
    const navItems = getLocalizedNavigationItems(currentLocale);
    
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="flex flex-col gap-4">
                        <div className="footer__logo">
                            <Image src="/imgs/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <div className="footer__info">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                <mask id="mask0_2038_1064" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                    <rect width={20} height={20} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_2038_1064)">
                                    <path d="M9.99998 17.7709C9.80553 17.7709 9.61109 17.7362 9.41665 17.6667C9.2222 17.5973 9.04859 17.4931 8.89581 17.3542C7.99304 16.5209 7.19442 15.7084 6.49998 14.9167C5.80554 14.1251 5.22567 13.3577 4.7604 12.6147C4.29512 11.8716 3.94095 11.1563 3.6979 10.4688C3.45484 9.78133 3.33331 9.12508 3.33331 8.50008C3.33331 6.41675 4.00345 4.75703 5.34373 3.52091C6.68401 2.2848 8.23609 1.66675 9.99998 1.66675C11.7639 1.66675 13.316 2.2848 14.6562 3.52091C15.9965 4.75703 16.6666 6.41675 16.6666 8.50008C16.6666 9.12508 16.5451 9.78133 16.3021 10.4688C16.059 11.1563 15.7048 11.8716 15.2396 12.6147C14.7743 13.3577 14.1944 14.1251 13.5 14.9167C12.8055 15.7084 12.0069 16.5209 11.1041 17.3542C10.9514 17.4931 10.7778 17.5973 10.5833 17.6667C10.3889 17.7362 10.1944 17.7709 9.99998 17.7709ZM9.99998 10.0001C10.4583 10.0001 10.8507 9.83689 11.1771 9.5105C11.5035 9.18411 11.6666 8.79175 11.6666 8.33342C11.6666 7.87508 11.5035 7.48272 11.1771 7.15633C10.8507 6.82994 10.4583 6.66675 9.99998 6.66675C9.54165 6.66675 9.14929 6.82994 8.8229 7.15633C8.49651 7.48272 8.33331 7.87508 8.33331 8.33342C8.33331 8.79175 8.49651 9.18411 8.8229 9.5105C9.14929 9.83689 9.54165 10.0001 9.99998 10.0001Z" fill="white" />
                                </g>
                            </svg>
                            <span className="footer__info-text">
                                Jl. Mulawarman KM. 17,5 RT. 23 Balikpapan
                            </span>
                        </div>
                        <div className="footer__info">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.7933 18.4442C12.5933 18.4001 9.19248 17.9301 5.63081 14.3692C2.06998 10.8076 1.60081 7.40756 1.55581 6.20672C1.48915 4.37672 2.89081 2.59922 4.50998 1.90506C4.70496 1.82086 4.91848 1.78881 5.12959 1.81204C5.3407 1.83527 5.54214 1.91298 5.71415 2.03756C7.04748 3.00922 7.96748 4.47922 8.75748 5.63506C8.9313 5.889 9.00562 6.19801 8.96628 6.50322C8.92693 6.80843 8.77668 7.0885 8.54415 7.29006L6.91831 8.49756C6.83976 8.55428 6.78447 8.63758 6.76271 8.73199C6.74095 8.8264 6.75419 8.92551 6.79998 9.01089C7.16831 9.68006 7.82331 10.6767 8.57331 11.4267C9.32331 12.1767 10.3675 12.8751 11.0833 13.2851C11.1731 13.3354 11.2787 13.3495 11.3785 13.3244C11.4783 13.2993 11.5647 13.2369 11.62 13.1501L12.6783 11.5392C12.8729 11.2808 13.1599 11.1076 13.4793 11.056C13.7987 11.0045 14.1256 11.0785 14.3916 11.2626C15.5641 12.0742 16.9325 12.9784 17.9341 14.2609C18.0688 14.4341 18.1545 14.6404 18.1822 14.8581C18.2099 15.0758 18.1786 15.2969 18.0916 15.4984C17.3941 17.1259 15.6291 18.5117 13.7933 18.4442Z" fill="white" />
                            </svg>
                            <span className="footer__info-text">
                                +62 542 747640
                            </span>
                        </div>
                        <div className="lg:hidden">
                            <SocialLinks />
                        </div>
                    </div>
                    <nav className="footer__nav">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.href} className="footer__nav-item">{t(item.label)}</Link>
                        ))}
                    </nav>
                </div>
                <div className="footer__bottom">
                    <div className="lg:block hidden">
                        <SocialLinks />
                    </div>
                    <div className="footer__bottom-right">
                        <div className="footer__copyright">
                            <span>Copyright © 2025 REL | PT. RESOURCE EQUIPMENT INDONESIA</span>
                        </div>
                        <div className="footer__link">
                            <Link href={`/${currentLocale}`} className="footer__link">Privacy Policy</Link>
                        </div>
                        <div className="footer__link">
                            <Link href={`/${currentLocale}`} className="footer__link">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;