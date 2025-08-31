import LayoutBase from "@/components/LayoutBase";
import DetailPage from "@/components/DetailPage";

export default async function Page({ params }) {
    const { locale, slug, "detail_slug": detailSlug } = await params;
    
    let pageSlug;
    if(slug === 'projects' || slug === 'proyek') pageSlug = 'projects';
    if(slug === 'products' || slug === 'produk') pageSlug = 'products';
    
    return (
        <LayoutBase locale={locale}>
            <DetailPage slug={pageSlug} detailSlug={detailSlug} />
        </LayoutBase>
    );
}