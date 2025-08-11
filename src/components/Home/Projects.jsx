"use client";

import { useTranslation } from "react-i18next";
import dataProjects from "@/data/projects.json";
import Images from "./Project/Images";
import Text from "./Project/Text";
import { useState } from "react";

export default function Projects({ data }) {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const dt = dataProjects.data.slice(0, 3);
    const handlePrev = () => {
        setActiveIndex(activeIndex === 0 ? dt.length - 1 : activeIndex - 1);
    }

    const handleNext = () => {
        setActiveIndex(activeIndex === dt.length - 1 ? 0 : activeIndex + 1);
    }
    return (
        <section className="home__projects">
            <div className="container">
                <Images data={dt} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <div className="home__projects__content">
                    <div>
                        <label className="title__label">{t('home.project.label')}</label>
                        <Text data={dt} activeIndex={activeIndex} />
                    </div>
                    <div className="home__projects__content__arrows">
                        <div className="home__projects__content__arrows__arrow" onClick={handlePrev}></div>
                        <div className="home__projects__content__arrows__arrow" onClick={handleNext}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}