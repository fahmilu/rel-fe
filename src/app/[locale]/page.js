import LayoutBase from "@/components/LayoutBase";
import data from "@/data/home.json";
import Switcher from "@/components/Switcher";

export default async function Home({ params }) {
    const { locale } = await params;
    console.log(data);
    return (
        <LayoutBase locale={locale}>
            {data.contents.map((content, index) => (
                <Switcher key={index} type={content.type} data={content.data} />
            ))}
        </LayoutBase>
    );
}