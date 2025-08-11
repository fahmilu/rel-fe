"use client";
import data from "@/data/product.json";
import { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import ProductCard from "@/components/Cards/Product";
import Pagination from "@/components/Pagination";
import { useTranslation } from "react-i18next";

export default function Products() {
    const { t } = useTranslation();
    const dataProducts = data.data;
    const types = ['all', ...new Set(dataProducts.map(item => item.type))];
    const applications = ['all', ...new Set(dataProducts.map(item => item.application))];
    const sizeRanges = ['all', ...new Set(dataProducts.map(item => item.sizeRange))];

    const [activeType, setActiveType] = useState('all');
    const [activeApplication, setActiveApplication] = useState('all');
    const [activeSizeRange, setActiveSizeRange] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(dataProducts);
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const filteredProducts = dataProducts.filter(item => {
            if (activeType !== 'all' && item.type !== activeType) return false;
            if (activeApplication !== 'all' && item.application !== activeApplication) return false;
            if (activeSizeRange !== 'all' && item.sizeRange !== activeSizeRange) return false;
            return true;
        });
        setFilteredProducts(filteredProducts);
        // Reset to first page when filters change
        setCurrentPage(1);
    }, [activeType, activeApplication, activeSizeRange]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    console.log(filteredProducts);
    // console.log(types, applications, sizeRanges);
    return (
        <section className="product__index">
            <div className="container">
                <div className="datalist">
                    <div className="filter__area">
                        <div className="filter__list">
                            <div className="filter__item">
                                <div className="filter__title">{t('product.filter.type')}</div>
                                <Filter data={types} active={activeType} setActive={setActiveType} />
                            </div>
                            <div className="filter__item">
                                <div className="filter__title">{t('product.filter.application')}</div>
                                <Filter data={applications} active={activeApplication} setActive={setActiveApplication} />
                            </div>
                            <div className="filter__item">
                                <div className="filter__title">{t('product.filter.sizeRange')}</div>
                                <Filter data={sizeRanges} active={activeSizeRange} setActive={setActiveSizeRange} />
                            </div>
                        </div>
                        <div className="text-[#868686] text-base">
                            {t('global.dataCount', {
                                current: currentPage * itemsPerPage, 
                                count: filteredProducts.length
                            })}
                        </div>
                    </div>
                    <div className="card__list">
                        {currentProducts.map((item, index) => (
                            <ProductCard key={index} data={item} />
                        ))}
                    </div>
                    
                    {/* Pagination Component */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        itemsPerPage={itemsPerPage}
                        totalItems={filteredProducts.length}
                    />
                </div>
            </div>
        </section>
    )
}