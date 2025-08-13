"use client";

import DetailPageGallery from "../Gallery";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import RelatedProducts from "./Related";
const DetailPageProduct = ({ data }) => {
    const { i18n } = useTranslation();
    return (
        <>
            <section className="product__detail">
                <div className="product__detail__title">
                    <div className="container">
                        <div className="relative">
                            <div className="product__detail__gallery hidden md:block">
                                <DetailPageGallery data={data.images} />
                            </div>
                        </div>
                        <h2>{data.title}</h2>
                    </div>
                </div>
                <div className="product__detail__content">
                    <div className="container">
                        <div>
                            <div className="product__detail__gallery md:hidden">
                                <DetailPageGallery data={data.images} />
                            </div>
                        </div>
                        <div className="product__detail__info">
                            {data.info.map((item, index) => (
                                <div className="product__detail__info__item" key={index}>
                                    <div className="product__detail__info__item__label">{item.title}</div>
                                    <div className="product__detail__info__item__value">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="product__detail__guide">
                    <div className="container">
                        <h4>{i18n.language === 'id' ? 'Panduan Penggunaan' : 'Application guide'}</h4>
                        <div className="product__detail__guide__content" dangerouslySetInnerHTML={{ __html: data.guide }} />
                        <div className="product__detail__guide__actions">
                            {data.datasheet && (
                                <Link href={data.datasheet} target="_blank" rel="noopener noreferrer" className="btn btn__primary">
                                    {i18n.language === 'id' ? 'Unduh Data Sheet' : 'Download Datasheet'}
                                </Link>
                            )}
                            <Link href={data.datasheet} target="_blank" rel="noopener noreferrer" className="btn btn__secondary">
                                {i18n.language === 'id' ? 'Form Permintaan Penawaran' : 'Request Quote Form'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProducts />
        </>
    );
};

export default DetailPageProduct;