'use client';

import Image from "next/image";

const About = ({ data }) => {
  return (
    <section className="home__about">
        <div className="container">
            <div className="home__about__content">
                <label className="title__label">{data.title}</label>
                <h4 dangerouslySetInnerHTML={{ __html: data.intro }} />
                <div className="home__about__content__description" dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            <div className="home__about__services">
                {data.icons.map((icon, index) => (
                    <div className="home__about__services__service" key={index}>
                        <div className="home__about__services__service__image">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${icon.icon}`} alt={icon.title} width={100} height={100} />
                        </div>
                        <h4 className="text-right">{ icon.title }</h4>
                        <div className="home__about__services__service__line">
                            <svg xmlns="http://www.w3.org/2000/svg" width={'inherit'} height={'inherit'} style={{ width: '100%', height: '100%' }} viewBox="0 0 372 12" fill="none">
                                <path d="M372 0H0L22.7008 12H372V0Z" fill="#E1E1E1" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default About;