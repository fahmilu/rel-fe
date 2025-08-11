'use client';

import Image from "next/image";
import { useTranslation } from "react-i18next";

const About = ({ data }) => {
    const { t } = useTranslation();

  return (
    <section className="home__about">
        <div className="container">
            <div className="home__about__content">
                <label className="title__label">{t("home.about.label")}</label>
                <h4>{data.title}</h4>
                <div className="home__about__content__description" dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
            <div className="home__about__services">
                {data.services.map((service, index) => (
                    <div className="home__about__services__service" key={index}>
                        <div className="home__about__services__service__image">
                            <Image src={service.image} alt={service.title} width={100} height={100} />
                        </div>
                        <h4>{t(service.title)}</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width={372} height={12} viewBox="0 0 372 12" fill="none">
                            <path d="M372 0H0L22.7008 12H372V0Z" fill="#E1E1E1" />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default About;