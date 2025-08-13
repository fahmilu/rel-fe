"use client";

import { useTranslation } from "react-i18next";
import dataProjects from "@/data/projects.json";
import ProjectCard from "@/components/Cards/Project";
import Link from "next/link";
export default function RelatedProjects() {
    const { i18n } = useTranslation();
    console.log(i18n.language);
    const dt = dataProjects.data.slice(0, 3);
    
    return (
        <section className="related__projects">
            <div className="container">
                <div className="flex justify-between items-center mb-10">
                    <h2>{i18n.language === 'id' ? 'Proyek Terkait' : 'Related Projects'}</h2>
                    <div className="hidden md:block">
                        <Link href="/projects" className="btn btn__primary">
                            {i18n.language === 'id' ? 'Lihat Semua Proyek' : 'View All Projects'}
                        </Link>
                    </div>
                </div>
                <div className="related__projects__list">
                    {dt.map((item, index) => (
                        <ProjectCard key={index} data={item} />
                    ))}
                </div>
                <div className="mt-8  md:hidden">
                    <Link href="/projects" className="btn btn__primary">
                        {i18n.language === 'id' ? 'Lihat Semua Proyek' : 'View All Projects'}
                    </Link>
                </div>
            </div>
        </section>
    )
}