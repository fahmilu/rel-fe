"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function TabsList({ tabs, activeTab, setActiveTab }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (item) => {
        setIsOpen(false);
        setActiveTab(item);
    }
    return (
        <div className="tab__list">
            <div className="tab__list__content">
                <div className="tab__list__title">{t("industry.list.title")}</div>
                <div className="tab__list__button" onClick={() => setIsOpen(!isOpen)}>
                <span>{t(tabs[activeTab].name)}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_4014_11" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                        <rect width={24} height={24} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_4014_11)">
                        <path d="M11.475 14.475L7.85001 10.85C7.80001 10.8 7.76251 10.7458 7.73751 10.6875C7.71251 10.6292 7.70001 10.5667 7.70001 10.5C7.70001 10.3667 7.74585 10.25 7.83751 10.15C7.92918 10.05 8.05001 10 8.20001 10H15.8C15.95 10 16.0708 10.05 16.1625 10.15C16.2542 10.25 16.3 10.3667 16.3 10.5C16.3 10.5333 16.25 10.65 16.15 10.85L12.525 14.475C12.4417 14.5583 12.3583 14.6167 12.275 14.65C12.1917 14.6833 12.1 14.7 12 14.7C11.9 14.7 11.8083 14.6833 11.725 14.65C11.6417 14.6167 11.5583 14.5583 11.475 14.475Z" fill="#231F20" />
                    </g>
                </svg>
            </div>

                <div className={`tab__list__content__list ${isOpen ? "active" : ""}`}>
                    {tabs.map((tab, index) => (
                        <div key={index} className={`tab__list__item ${activeTab === index ? "active" : ""}`} onClick={() => handleClick(index)}>
                            <span>{t(tab.name)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}