import { getDetailData } from "@/utils/detailData";
import LayoutBase from "@/components/LayoutBase";
import DetailPage from "@/components/DetailPage";

export default async function Page({ params }) {
    const { locale, slug, "detail-slug": detailSlug } = await params;
    
    // Get page data based on slug
    const data = await getDetailData(slug);
    
    return (
        <LayoutBase locale={locale}>
            <DetailPage slug={slug} detailSlug={detailSlug} data={data} />
        </LayoutBase>
    );
}