"use client";

import { useTranslation } from "react-i18next";

export default function Example() {
    const { t } = useTranslation();
    return <div className="w-screen h-screen bg-red-500">{t("home.about.ep1")}</div>;
}