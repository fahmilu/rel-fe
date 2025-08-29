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
                <h2>{t(tab.name)}</h2>
                <h4>{t(tab.subtitle)}</h4>
            </div>
            <div className="tab__content__media">
                {tab.media[0].type === "video" ? (
                    <video src={tab.media[0].url} autoPlay muted loop />
                ) : (
                    <Image
                        src={tab.media[0].url}
                        alt={t(tab.name)}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
            <div className="tab__content__benefits">
                <h4>Key Benefits</h4>
                <ul className="tab__content__benefits__list">
                    {tab.benefits.map((benefit, index) => (
                        <li key={index} className="tab__content__benefits__item">
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tab__content__suggested">
                <h4>Suggested pump models</h4>
                <div className="tab__content__suggested__list">
                    {tab.suggestedProducts.map((product, index) => (
                        <div key={index} className="tab__content__suggested__list__item">
                            <div className="tab__content__suggested__list__item__image">
                                <Image src={product.image} alt={product.name} fill className="object-cover" />
                            </div>
                            <div className="tab__content__suggested__list__item__content">
                                <h4>{product.name}</h4>
                            </div>
                        </div>
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
