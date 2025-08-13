"use client";

import { useTranslation } from "react-i18next";
import dataProducts from "@/data/product.json";
import ProductCard from "@/components/Cards/Product";
import Link from "next/link";
export default function RelatedProducts() {
    const { i18n } = useTranslation();
    console.log(i18n.language);
    const dt = dataProducts.data.slice(0, 3);
    
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
                    {dt.map((item, index) => (
                        <ProductCard key={index} data={item} />
                    ))}
                </div>
                <div className="mt-8  md:hidden">
                    <Link href="/products" className="btn btn__primary">
                        {i18n.language === 'id' ? 'Lihat Semua Produk' : 'View All Products'}
                    </Link>
                </div>
            </div>
        </section>
    )
}