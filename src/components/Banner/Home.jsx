'use client';

import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { useTranslation } from "react-i18next";


const HomeBanner = ({ data }) => {
    const { t } = useTranslation();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        dotsClass: "slick-dots banner__home__dots",
        customPaging: (i) => (
            <div className="banner__home__dot" />
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <section className="banner__home">
            <div className="banner__home__container">
                <Slider {...sliderSettings}>
                    {data.map((slide, index) => (
                        <div key={index} className="banner__home__slide">
                            <div 
                                className="banner__home__background"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div className="banner__home__overlay">
                                </div>
                                <div className="container">
                                    <div className="banner__home__content">
                                        <h1>{slide.title}</h1>
                                        <h4>{slide.description}</h4>
                                        <div className="banner__home__buttons">
                                            {slide.links.map((link, linkIndex) => (
                                                <Link
                                                    key={linkIndex}
                                                    href={link.url}
                                                    className={`btn btn__${link.class}`}
                                                >
                                                    {t(link.label)}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="banner__home__scroll mt-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24 4C30.6274 4 36 9.37258 36 16V32C36 38.6274 30.6274 44 24 44C17.3726 44 12 38.6274 12 32V16C12 9.37258 17.3726 4 24 4ZM24 5.6C18.0093 5.6 13.6 11.5817 13.6 16V32C13.6 36.4183 17.2 42.4 24 42.4C30.8 42.4 34.4 36.4183 34.4 32V16C34.4 11.5817 29.9907 5.6 24 5.6ZM24 14C25.1046 14 26 14.8954 26 16V20C26 21.1046 25.1046 22 24 22C22.8954 22 22 21.1046 22 20V16C22 14.8954 22.8954 14 24 14Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default HomeBanner;