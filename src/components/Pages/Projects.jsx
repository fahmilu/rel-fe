"use client";
import data from "@/data/projects.json";
import { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import ProjectCard from "@/components/Cards/Project";
import Pagination from "@/components/Pagination";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();
    const dataProjects = data.data;

    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    // Calculate pagination
    const totalPages = Math.ceil(dataProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = dataProjects.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // console.log(types, applications, sizeRanges);
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