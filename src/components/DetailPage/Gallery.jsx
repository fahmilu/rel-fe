'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';

const DetailPageGallery = ({ data }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        fade: true,        
        asNavFor: nav2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    const thumbnailSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: nav1,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    const goToPrevious = () => {
        nav1?.slickPrev();
    };

    const goToNext = () => {
        nav1?.slickNext();
    };

    return (
        <div className="detail__gallery">
            <div className="gallery__main">
                <Slider
                    {...mainSliderSettings}
                    ref={(slider) => setNav1(slider)}
                >
                    {data.map((image, index) => (
                        <div key={index} className="gallery__slide">
                            <img 
                                src={image} 
                                alt={`Gallery ${index + 1}`} 
                                className="gallery__image"
                            />
                        </div>
                    ))}
                </Slider>
                
                {/* Custom Arrow Container */}
                <div className="gallery__arrows">
                    <button 
                        onClick={goToPrevious}
                        className="gallery__arrow gallery__arrow--prev"
                        aria-label="Previous image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={'inherit'} height={'inherit'} style={{width: '100%', height: '100%'}} viewBox="0 0 56 56" fill="none">
                            <mask id="mask0_2045_2898" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={56} height={56}>
                                <rect width={56} height={56} fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2045_2898)">
                                <path d="M30.6826 37.6833L22.2242 29.225C22.0298 29.0306 21.8937 28.8361 21.8159 28.6417C21.7381 28.4472 21.6992 28.2333 21.6992 28C21.6992 27.7667 21.7381 27.5528 21.8159 27.3583C21.8937 27.1639 22.0298 26.9695 22.2242 26.775L30.6826 18.3167C30.7992 18.2 30.9256 18.1125 31.0617 18.0542C31.1978 17.9958 31.3437 17.9667 31.4992 17.9667C31.8103 17.9667 32.0826 18.0736 32.3159 18.2875C32.5492 18.5014 32.6659 18.7833 32.6659 19.1333V36.8667C32.6659 37.2167 32.5492 37.4986 32.3159 37.7125C32.0826 37.9264 31.8103 38.0333 31.4992 38.0333C31.4214 38.0333 31.1492 37.9167 30.6826 37.6833Z" fill="white" />
                            </g>
                        </svg>

                    </button>
                    <button 
                        onClick={goToNext}
                        className="gallery__arrow gallery__arrow--next"
                        aria-label="Next image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={'inherit'} height={'inherit'} style={{width: '100%', height: '100%'}} viewBox="0 0 56 56" fill="none">
                            <mask id="mask0_2045_2902" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={56} height={56}>
                                <rect width={56} height={56} fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2045_2902)">
                                <path d="M24.4997 38.0333C24.1886 38.0333 23.9163 37.9264 23.683 37.7125C23.4497 37.4986 23.333 37.2167 23.333 36.8667V19.1333C23.333 18.7833 23.4497 18.5014 23.683 18.2875C23.9163 18.0736 24.1886 17.9667 24.4997 17.9667C24.5775 17.9667 24.8497 18.0833 25.3163 18.3167L33.7747 26.775C33.9691 26.9695 34.1052 27.1639 34.183 27.3583C34.2608 27.5528 34.2997 27.7667 34.2997 28C34.2997 28.2333 34.2608 28.4472 34.183 28.6417C34.1052 28.8361 33.9691 29.0306 33.7747 29.225L25.3163 37.6833C25.1997 37.8 25.0733 37.8875 24.9372 37.9458C24.8011 38.0042 24.6552 38.0333 24.4997 38.0333Z" fill="white" />
                            </g>
                        </svg>

                    </button>
                </div>
            </div>
            
            <div className="gallery__thumbnails">
                <Slider
                    {...thumbnailSliderSettings}
                    ref={(slider) => setNav2(slider)}
                >
                    {data.map((image, index) => (
                        <div key={index} className="gallery__thumbnail">
                            <img 
                                src={image} 
                                alt={`Thumbnail ${index + 1}`} 
                                className="thumbnail__image"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default DetailPageGallery;