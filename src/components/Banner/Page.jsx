import Image from "next/image";
import { fetchPageData } from "@/services/api";
const PageBanner = async ({ data, slug, locale }) => {
    const dataBanner = await fetchPageData(slug, locale);
    return (
        <div>
            <div className="banner__page">
                {dataBanner.data.image && <Image src={`${process.env.NEXT_BASE_URL}${dataBanner.data.image}`} alt={dataBanner.data.title} fill className="object-cover hidden md:block" />}
                {dataBanner.data.image_mobile && <Image src={`${process.env.NEXT_BASE_URL}${dataBanner.data.image_mobile}`} alt={dataBanner.data.title} fill className="object-cover block md:hidden" />}
                <div className="banner__page__overlay"></div>
                <div className="container">
                    <div className="page__banner__content">
                        <h1>{dataBanner.data.title}</h1>
                        <h4 dangerouslySetInnerHTML={{ __html: dataBanner.data.content }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;