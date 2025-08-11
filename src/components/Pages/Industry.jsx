"use client";
import data from "@/data/industry.json";
import TabsList from "@/components/Tabs/List";
import TabsContent from "@/components/Tabs/Content";
import { useState, useEffect } from "react";

export default function Industry() {
    const { industries } = data;
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }, [activeTab]);
    
    return (
        <section className="industry__index" id="industryIndex">
            <div className="container">
                <TabsList tabs={industries} activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabsContent tabs={industries} activeTab={activeTab} />
            </div>
        </section>
    )
}