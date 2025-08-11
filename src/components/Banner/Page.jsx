import Image from "next/image";

const PageBanner = ({ data }) => {
    return (
        <div>
            <div className="banner__page">
                <Image src={data.image} alt={data.title} fill className="object-cover" />
                <div className="banner__page__overlay"></div>
                <div className="container">
                    <div className="page__banner__content">
                        <h1>{data.title}</h1>
                        <h4>{data.description}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;