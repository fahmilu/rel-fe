"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";

const Text = ({ data, activeIndex }) => {
    const { t } = useTranslation();
    return (
        <div className="home__projects__content__text">
            {data.map((item, index) => (
                <div key={index} className={`home__projects__content__text__item ${activeIndex === index ? "active" : ""}`}>
                    <h3 className="capitalize">{item.title}</h3>
                    <div className="home__projects__content__text__item__location">{item.location}</div>
                    <div className="flex">
                        <Link href={'projects/detail-project'} className="btn btn__primary">{t('home.button.view.case')}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Text;