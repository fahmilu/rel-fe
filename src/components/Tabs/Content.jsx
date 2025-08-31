"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getLocalizedHref } from "@/utils/navigation";

export default function TabsContent({ tabs, activeTab }) {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  useEffect(() => {
    const video = document.querySelector(".tab__content__media video");
    if (video) {
      video.play();
    }
  }, [activeTab]);
  return (
    <>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab__content ${activeTab === index ? "active" : ""}`}
        >
            <div className="tab__content__header">
                <h2>{tab.title}</h2>
                <h4>{tab.lead}</h4>
            </div>
            <div className="tab__content__media">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${tab.image}`}
                    alt={tab.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="tab__content__benefits" dangerouslySetInnerHTML={{ __html: tab.description }} />
            <div className="tab__content__suggested">
                <h4>{currentLocale === 'id' ? 'Model Pompa yang Disarankan' : 'Suggested pump models'}</h4>
                <div className="tab__content__suggested__list">
                    {tab.products.map((product, index) => (
                        <Link href={`${getLocalizedHref('products', currentLocale)}/${product.slug}`} key={index} className="tab__content__suggested__list__item">
                            <div className="tab__content__suggested__list__item__image">
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.image}`} alt={product.name} fill className="object-cover" />
                            </div>
                            <div className="tab__content__suggested__list__item__content">
                                <h4>{product.name}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="md:flex">
                <Link href={getLocalizedHref('industries', currentLocale)} className="btn btn__primary">{t("industry.button.find")}</Link>
            </div>
        </div>
      ))}
    </>
  );
}
