"use client";
import DetailPageGallery from "../Gallery";
import RelatedProjects from "./Related";
import { fetchData } from "@/services/api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getLocalizedHref } from "@/utils/navigation";
import Link from "next/link";

const DetailPageProject = ({ detailSlug }) => {
    
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    const [data, setData] = useState(null);
    const [relatedProjects, setRelatedProjects] = useState([]);

    useEffect(() => {
        const fetchDataProject = async () => {
            const { data: dataProject } = await fetchData(`projects/${detailSlug}`, currentLocale);
            const { data: relatedProjects } = await fetchData(`projects`, currentLocale);
            setRelatedProjects(relatedProjects.filter(project => project.id !== dataProject.id));
            setData(dataProject);
        }
        fetchDataProject();
    }, [currentLocale]);

    console.log(data);
    return (
        <>
            {data && (
                <section className="project__detail">
                    <div className="project__detail__top">
                        <div className="container">
                            <h2>{data.title}</h2>
                            <p>{data.location}</p>
                        </div>
                    </div>
                    <div className="container">
                        {data.images.length > 0 && <DetailPageGallery data={data.images} />}
                        <div className="project__detail__info">
                            {data.timeline &&
                                <div className="project__detail__info__item">
                                     <div>{currentLocale === 'id' ? 'Rekap Waktu' : 'Timeline'}</div>
                                     <div dangerouslySetInnerHTML={{ __html: data.timeline }} />
                                 </div>
                            }
                            {data.problem_statement &&
                                <div className="project__detail__info__item">
                                     <div>{currentLocale === 'id' ? 'Masalah yang dihadapi' : 'Problem Statement'}</div>
                                     <div dangerouslySetInnerHTML={{ __html: data.problem_statement }} />
                                 </div>
                            }
                            {data.site_condition &&
                                <div className="project__detail__info__item">
                                     <div>{currentLocale === 'id' ? 'Kondisi Lokasi' : 'Site Condition'}</div>
                                     <div dangerouslySetInnerHTML={{ __html: data.site_condition }} />
                                 </div>
                            }
                            {data.products.length > 0 && (
                                <div className="project__detail__info__item">
                                    <div>{currentLocale === 'id' ? 'Pompa yang digunakan' : 'Pump Used'}</div>
                                    <div>
                                        <ul>
                                            {data.products.map((item, index) => (
                                                <li key={index}>
                                                    <Link className="hover:underline" href={`${getLocalizedHref('products', currentLocale)}/${item.slug}`}>{item.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {data.outcome &&
                                <div className="project__detail__info__item">
                                     <div>{currentLocale === 'id' ? 'Kesimpulan' : 'Outcome'}</div>
                                     <div dangerouslySetInnerHTML={{ __html: data.outcome }} />
                                 </div>
                            }
                            {data.feedback &&
                                <div className="project__detail__info__item">
                                     <div>{currentLocale === 'id' ? 'Umpan Balik' : 'Feedback'}</div>
                                     <div dangerouslySetInnerHTML={{ __html: data.feedback }} />
                                 </div>
                            }
                        </div>
                    </div>
                </section>
            )}
            <RelatedProjects data={relatedProjects} />
        </>
    );
};

export default DetailPageProject;