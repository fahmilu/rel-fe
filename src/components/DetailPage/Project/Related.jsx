"use client";

import { useTranslation } from "react-i18next";
import dataProjects from "@/data/projects.json";
import ProjectCard from "@/components/Cards/Project";
import Link from "next/link";
import { getLocalizedHref } from "@/utils/navigation";

const Related = ({ data }) => {
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
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
                    <Link href={getLocalizedHref('projects', currentLocale)} className="btn btn__primary">
                        {i18n.language === 'id' ? 'Lihat Semua Proyek' : 'View All Projects'}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Related;