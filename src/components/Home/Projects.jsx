"use client";

import { fetchData } from "@/services/api";
import Images from "./Project/Images";
import Text from "./Project/Text";
import { useState, useEffect } from "react";

export default function Projects({ data, locale }) {
    const [dataProjects, setDataProjects] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const fetchDataProjects = async () => {
            const { data: dataProjects } = await fetchData('projects', locale);
            setDataProjects(dataProjects.slice(0, 3));
        }
        fetchDataProjects();
    }, [locale]);
    

    const handlePrev = () => {
        setActiveIndex(activeIndex === 0 ? dataProjects.length - 1 : activeIndex - 1);
    }

    const handleNext = () => {
        setActiveIndex(activeIndex === dataProjects.length - 1 ? 0 : activeIndex + 1);
    }
    return (
        <section className="home__projects">
            {dataProjects.length > 0 && (
                <div className="container">
                    <Images data={dataProjects} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    <div className="home__projects__content">
                        <div>
                            <label className="title__label">{data.intro}</label>
                            <Text data={dataProjects} activeIndex={activeIndex} button_label={data.button_label} />
                        </div>
                        <div className="home__projects__content__arrows">
                            <div className="home__projects__content__arrows__arrow" onClick={handlePrev}></div>
                            <div className="home__projects__content__arrows__arrow" onClick={handleNext}></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}