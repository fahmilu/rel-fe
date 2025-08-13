import DetailPageProduct from "./Product";
import DetailPageProject from "./Project";

const DetailPage = ({ slug, detailSlug, data }) => {
    if (slug === "products") return <DetailPageProduct data={data} detailSlug={detailSlug} />;
    if (slug === "projects") return <DetailPageProject data={data} detailSlug={detailSlug} />;

    return false;
};

export default DetailPage;