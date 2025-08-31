"use client";

import DetailPageGallery from "../Gallery";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import RelatedProducts from "./Related";
import { fetchData } from "@/services/api";
import { useEffect, useState } from "react";
import { getLocalizedHref } from "@/utils/navigation";

const DetailPageProduct = ({ detailSlug }) => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const [data, setData] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    // console.log(currentLocale, detailSlug);
    useEffect(() => {
        const fetchDataProduct = async () => {
            const { data: dataProduct } = await fetchData(`products/${detailSlug}`, currentLocale);
            const { data: relatedProducts } = await fetchData(`products`, currentLocale);
            // console.log(dataProduct);
            // console.log(currentLocale, relatedProducts);
            setRelatedProducts(relatedProducts.filter(product => product.id !== dataProduct.id));
            setData(dataProduct);
        }
        fetchDataProduct();
    }, [currentLocale]);

    // console.log(data);
    return (
        data && (
            <>
                <section className="product__detail">
                    <div className="product__detail__title">
                        <div className="container">
                            <div className="relative">
                                <div className="product__detail__gallery hidden md:block">
                                    <DetailPageGallery data={data.images} />
                                </div>
                            </div>
                            <h2>{data.name}</h2>
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
                                {data.specifications.map((item, index) => (
                                    <div className="product__detail__info__item" key={index}>
                                        <div className="product__detail__info__item__label capitalize">{currentLocale === 'id' ? item.id : item.en}</div>
                                        <div className="product__detail__info__item__value">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="product__detail__guide">
                        <div className="container">
                            {/* <h4>{i18n.language === 'id' ? 'Panduan Penggunaan' : 'Application guide'}</h4> */}
                            <div className="product__detail__guide__content" dangerouslySetInnerHTML={{ __html: data.description }} />
                            <div className="product__detail__guide__actions">
                                {data.document && (
                                    <Link href={data.document} target="_blank" rel="noopener noreferrer" className="btn btn__primary">
                                        {i18n.language === 'id' ? 'Unduh Data Sheet' : 'Download Datasheet'}
                                    </Link>
                                )}
                                <Link href={getLocalizedHref('contact-us', currentLocale)} target="_blank" rel="noopener noreferrer" className="btn btn__secondary">
                                    {i18n.language === 'id' ? 'Form Permintaan Penawaran' : 'Request Quote Form'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <RelatedProducts data={relatedProducts.slice(0, 3)} />
            </>
        )
    );
};

export default DetailPageProduct;