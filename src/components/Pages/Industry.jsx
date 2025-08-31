"use client";
// import data from "@/data/industry.json";
import TabsList from "@/components/Tabs/List";
import TabsContent from "@/components/Tabs/Content";
import { useState, useEffect } from "react";
import { fetchData } from "@/services/api";
import { useTranslation } from "react-i18next";

export default function Industry() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const [industries, setIndustries] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchDataIndustries = async () => {
            const { data: industries } = await fetchData('industries', currentLocale);
            const sortedIndustries = industries.slice().sort((a, b) => a.id - b.id);
            setIndustries(sortedIndustries);
        }
        fetchDataIndustries();
    }, [currentLocale]);

    // console.log(industries);
    useEffect(() => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }, [activeTab]);
    
    return (
        <section className="industry__index" id="industryIndex">
            {industries.length > 0 && (
                <div className="container">
                    <TabsList tabs={industries} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabsContent tabs={industries} activeTab={activeTab} />
                </div>
            )}
        </section>
    )
}