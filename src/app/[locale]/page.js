import LayoutBase from "@/components/LayoutBase";
import dataPages from "@/data/home.json";
import Switcher from "@/components/Switcher";
import { fetchData } from "@/services/api";

export default async function Home({ params }) {
    const { locale } = await params;
    const { data } = await fetchData('pages', locale);
    return (
        <LayoutBase locale={locale}>
            <Switcher type={'home-banner'} data={data} />
            {data.components.map((content, index) => (
                <Switcher key={index} type={content.type} data={content.data} locale={locale} />
            ))}
        </LayoutBase>
    );
}