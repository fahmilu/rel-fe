import DetailPageProduct from "./Product";
import DetailPageProject from "./Project";

const DetailPage = ({ slug, detailSlug }) => {
    if (slug === "products") return <DetailPageProduct detailSlug={detailSlug} />;
    if (slug === "projects") return <DetailPageProject detailSlug={detailSlug} />;

    return false;
};

export default DetailPage;