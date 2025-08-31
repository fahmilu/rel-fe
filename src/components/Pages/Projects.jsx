"use client";
import data from "@/data/projects.json";
import { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import ProjectCard from "@/components/Cards/Project";
import Pagination from "@/components/Pagination";
import { useTranslation } from "react-i18next";
import { fetchData } from "@/services/api";

export default function Projects() {
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    // const dataProjects = data.data;
    const [dataProjects, setDataProjects] = useState([]);

    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentProjects, setCurrentProjects] = useState([]);
    const itemsPerPage = 6;
    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // console.log(types, applications, sizeRanges);
    useEffect(() => {
        const fetchDataProjects = async () => {
            const { data: dataProjects } = await fetchData('projects', currentLocale);
            setDataProjects(dataProjects);
            setTotalPages(Math.ceil(dataProjects.length / itemsPerPage));
            setCurrentProjects(dataProjects.slice(0, itemsPerPage));
        }
        fetchDataProjects();
    }, [currentLocale]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentProjects(dataProjects.slice(startIndex, endIndex));
    }, [currentPage]);

    // console.log(dataProjects);

    return (
        <section className="project__index">
            <div className="container">
                <div className="datalist">
                    <div className="filter__area">
                
                        <div className="text-[#868686] text-base">
                            {t('global.dataCount', {
                                current: currentPage * itemsPerPage, 
                                count: dataProjects.length
                            })}
                        </div>
                    </div>
                    <div className="card__list">
                        {currentProjects.map((item, index) => (
                            <ProjectCard key={index} data={item} />
                        ))}
                    </div>
                    
                    {/* Pagination Component */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        itemsPerPage={itemsPerPage}
                        totalItems={dataProjects.length}
                    />
                </div>
            </div>
        </section>
    )
}