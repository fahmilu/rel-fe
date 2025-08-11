"use client";

import { useState, useEffect, useRef } from "react";

export default function Filter({ data, active, setActive }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = (item) => {
        setIsOpen(false);
        setActive(item);
    }
    return (
        <div className="filter__dropdown" ref={dropdownRef}>
            <div className="filter__button" onClick={() => setIsOpen(!isOpen)}>
                <span>{active}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_4014_11" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                        <rect width={24} height={24} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_4014_11)">
                        <path d="M11.475 14.475L7.85001 10.85C7.80001 10.8 7.76251 10.7458 7.73751 10.6875C7.71251 10.6292 7.70001 10.5667 7.70001 10.5C7.70001 10.3667 7.74585 10.25 7.83751 10.15C7.92918 10.05 8.05001 10 8.20001 10H15.8C15.95 10 16.0708 10.05 16.1625 10.15C16.2542 10.25 16.3 10.3667 16.3 10.5C16.3 10.5333 16.25 10.65 16.15 10.85L12.525 14.475C12.4417 14.5583 12.3583 14.6167 12.275 14.65C12.1917 14.6833 12.1 14.7 12 14.7C11.9 14.7 11.8083 14.6833 11.725 14.65C11.6417 14.6167 11.5583 14.5583 11.475 14.475Z" fill="#231F20" />
                    </g>
                </svg>
            </div>
            <div className={`filter__dropdown__list ${isOpen ? 'active' : ''}`}>
                {data.map((item, index) => (
                    <div key={index} className={`filter__dropdown__list__item ${active === item ? 'active' : ''}`} onClick={() => handleClick(item)}>
                        <span>{item}</span>
                        {active === item && (
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} viewBox="0 0 14 10" fill="none">
                                <path d="M4.95842 7.625L12.0209 0.5625C12.1876 0.395833 12.382 0.3125 12.6043 0.3125C12.8265 0.3125 13.0209 0.395833 13.1876 0.5625C13.3543 0.729167 13.4376 0.927083 13.4376 1.15625C13.4376 1.38542 13.3543 1.58333 13.1876 1.75L5.54176 9.41667C5.37509 9.58333 5.18065 9.66667 4.95842 9.66667C4.7362 9.66667 4.54176 9.58333 4.37509 9.41667L0.791758 5.83333C0.625091 5.66667 0.54523 5.46875 0.552174 5.23958C0.559119 5.01042 0.645925 4.8125 0.812591 4.64583C0.979258 4.47917 1.17717 4.39583 1.40634 4.39583C1.63551 4.39583 1.83342 4.47917 2.00009 4.64583L4.95842 7.625Z" fill="#F38D1E" />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}