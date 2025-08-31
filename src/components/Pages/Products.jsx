"use client";
import data from "@/data/product.json";
import { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import ProductCard from "@/components/Cards/Product";
import Pagination from "@/components/Pagination";
import { useTranslation } from "react-i18next";
import { fetchData } from "@/services/api";

export default function Products() {
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    // const dataProducts = data.data;

    const [dataProducts, setDataProducts] = useState([]);
    const [allDataLabel, setAllDataLabel] = useState('all');
    const [types, setTypes] = useState([]);
    const [applications, setApplications] = useState([]);
    const [sizeRanges, setSizeRanges] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [activeType, setActiveType] = useState(allDataLabel);
    const [activeApplication, setActiveApplication] = useState(allDataLabel);
    const [activeSizeRange, setActiveSizeRange] = useState(allDataLabel);


    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);
    const itemsPerPage = 6;

    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;

    useEffect(() => {
        const fetchDataProducts = async () => {
            const { data: dataProducts, filters } = await fetchData('products', currentLocale);
            // console.log(dataProducts);
            // console.log(filters);
            const allDataLabel = currentLocale === 'id' ? 'semua' : 'all';
            const types = [allDataLabel, ...new Set(currentLocale === 'id' ? filters['Tipe'] : filters['Type'])];
            const applications = [allDataLabel, ...new Set(currentLocale === 'id' ? filters['Pengunaan'] : filters['Application'])];
            const sizeRanges = [allDataLabel, ...new Set(currentLocale === 'id' ? filters['Ukuran'] : filters['Size Range'])];
            // console.log(types);

            setTypes(types);
            setApplications(applications);
            setSizeRanges(sizeRanges);
            setDataProducts(dataProducts);
            setFilteredProducts(dataProducts);
            setAllDataLabel(allDataLabel);
            setActiveType(allDataLabel);
            setActiveApplication(allDataLabel);
            setActiveSizeRange(allDataLabel);
        }
        fetchDataProducts();
    }, []);

    // console.log(dataProducts);


    
    // Pagination state

    useEffect(() => {
        const filteredProducts = dataProducts.filter(item => {
            if (activeType !== allDataLabel && item.specifications[0].value !== activeType) return false;
            if (activeApplication !== allDataLabel && item.specifications[1].value !== activeApplication) return false;
            if (activeSizeRange !== allDataLabel && item.specifications[2].value !== activeSizeRange) return false;
            return true;
        });
        setFilteredProducts(filteredProducts);
        // Reset to first page when filters change
        setCurrentPage(1);
    }, [activeType, activeApplication, activeSizeRange]);

    useEffect(() => {
        setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
        setCurrentProducts(filteredProducts.slice(0, itemsPerPage));
    }, [filteredProducts]);

    // Calculate pagination


    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // console.log(types, applications, sizeRanges);
    // console.log(filteredProducts);
    return (
        <section className="product__index">
            <div className="container">
                <div className="datalist">
                    <div className="filter__area">
                        <div className="filter__list">
                            <div className="filter__item">
                                <div className="filter__title">{t('product.filter.type')}</div>
                                <Filter data={types} active={activeType} setActive={setActiveType} locale={currentLocale} />
                            </div>
                            <div className="filter__item">
                                <div className="filter__title">{t('product.filter.application')}</div>
                                <Filter data={applications} active={activeApplication} setActive={setActiveApplication} locale={currentLocale} />
                            </div>
                            <div className="filter__item">
                                <div className="filter__title">{t('product.filter.sizeRange')}</div>
                                <Filter data={sizeRanges} active={activeSizeRange} setActive={setActiveSizeRange} locale={currentLocale} />
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
                    {currentProducts.length === 0 && (
                        <div className="text-center py-8 min-h-[200px] text-gray-500 flex flex-row items-center justify-center gap-2">
                            <div>{t('product.filter.noResults')}</div>
                        </div>
                    )}
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