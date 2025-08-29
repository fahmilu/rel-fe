"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { getLocalizedHref } from "@/utils/navigation";
import ProductCard from "@/components/Cards/Product";

const Related = ({ data }) => {
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;

    return (
        <section className="related__products">
            <div className="container">
                <div className="flex justify-between items-center md:flex-row flex-col gap-4 mb-10">
                    <h2>{i18n.language === 'id' ? 'Produk Lainnya' : 'Other Products'}</h2>
                    <div className="hidden md:block">
                        <Link href="/products" className="btn btn__primary">
                            {i18n.language === 'id' ? 'Lihat Semua Produk' : 'View All Products'}
                        </Link>
                    </div>
                </div>
                <div className="related__products__list">
                    {data.map((item, index) => (
                        <ProductCard key={index} data={item} />
                    ))}
                </div>
                <div className="mt-8  md:hidden">
                    <Link href={getLocalizedHref('product', currentLocale)} className="btn btn__primary">
                        {i18n.language === 'id' ? 'Lihat Semua Produk' : 'View All Products'}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Related;