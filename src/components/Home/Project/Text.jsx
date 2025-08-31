"use client";

import Link from "next/link";
import { getLocalizedHref } from "@/utils/navigation";
import { useTranslation } from "react-i18next";

const Text = ({ data, activeIndex, button_label }) => {
    const { t, i18n } = useTranslation();
    const locale = i18n.language;
    return (
        <div className="home__projects__content__text">
            {data.map((item, index) => (
                <div key={index} className={`home__projects__content__text__item ${activeIndex === index ? "active" : ""}`}>
                    <h3 className="capitalize">{item.title}</h3>
                    <div className="home__projects__content__text__item__location">{item.location}</div>
                    <div className="flex">
                        <Link href={`${getLocalizedHref('project', locale)}/${item.slug}`} className="btn btn__primary">{button_label}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Text;