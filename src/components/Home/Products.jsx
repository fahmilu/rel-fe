'use client';
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getLocalizedHref } from "@/utils/navigation";

const Products = ({ data }) => {
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;

    return (
        <section className="home__products">
            <div className="container">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <label className="title__label">{t(data.label)}</label>
                    <h4 className="text-white">{t(data.title)}</h4>
                </div>
                <div className="home__products__list">
                    {data.products.map((product, index) => (
                        <Link href={`/${currentLocale}/products/detail-product`} className="home__products__list__item" key={index}>
                            <div className="home__products__list__item__image">
                                <Image src={product.image} alt={product.title} fill className="object-cover" />
                            </div>
                            <div className="home__products__list__item__content">
                                <h3 className="text-white">{product.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="home__products__footer">
                    <Link href={getLocalizedHref('product', currentLocale)} className="btn btn__primary max-sm:w-full">{t('home.product.button')}</Link>
                </div>
            </div>
        </section>
    );
};

export default Products;