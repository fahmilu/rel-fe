import { getPageData } from "@/utils/pageData";
import LayoutBase from "@/components/LayoutBase";
import Switcher from "@/components/Switcher";

// Generate dynamic metadata based on slug
export async function generateMetadata({ params }) {
    const { locale, slug } = await params;
    
    try {
        const data = await getPageData(slug);
        return {
            title: `${data.title} | Resource Equipment Indonesia`,
            description: data.description || 'Page description',
            openGraph: {
                title: `${data.title} | Resource Equipment Indonesia`,
                description: data.description || 'Page description',
                images: data.image ? [
                    {
                        url: data.image,
                        width: 1200,
                        height: 630,
                        alt: data.title || 'Page image',
                    }
                ] : [],
                locale: locale,
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: `${data.title} | Resource Equipment Indonesia`,
                description: data.description || 'Page description',
                images: data.image ? [data.image] : [],
            },
        };
    } catch (error) {
        // Fallback metadata if page data cannot be loaded
        return {
            title: 'Page Not Found',
            description: 'The requested page could not be found.',
        };
    }
}

export default async function Page({ params }) {
    const { locale, slug } = await params;
    
    // Get page data based on slug
    const data = await getPageData(slug);
    
    return (
        <LayoutBase locale={locale}>
            {data.title && <Switcher type={'banner'} data={data} /> }
            {data.contents && data.contents.map((component, index) => {
                return <Switcher key={index} type={component.type} data={component.data} />;
            })}
        </LayoutBase>
    );
}