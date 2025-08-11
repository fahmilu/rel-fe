"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Industries = ({ data }) => {
    const { t } = useTranslation();

    return (
        <section className="home__industries">
            <div className="container">
                <label className="title__label">{t(data.label)}</label>
                <h3>{t(data.title)}</h3>
                <div className="home__industries__list">
                    {data.industries.map((industry, index) => (
                        <div key={index} className="home__industries__list__item">
                            <h4>{industry.title}</h4>
                            <div className="home__industries__list__item__image">
                                <Image src={industry.image} alt={industry.title} fill className="object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Industries;