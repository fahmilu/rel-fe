import { HomeBanner, PageBanner } from "./Banner";
import { About, Quote, Products, Industries, Projects } from "./Home";
import { Products as ProductsIndex, Projects as ProjectsIndex, Industry as IndustryIndex, Contact as ContactIndex } from "./Pages";

const Switcher = ({ type, data, slug, locale }) => {
    switch (type) {
        case "home-banner":
            return <HomeBanner data={data} />;
        case "paragraph-with-icons":
            return <About data={data} />;
        case "cta":
            return <Quote data={data} />;
        case "featured-products":
            return <Products data={data} locale={locale} />;
        case "line-of-works":
            return <Industries data={data} />;
        case "featured-projects":
            return <Projects data={data} locale={locale} />;
        case "banner":
            return <PageBanner data={data} slug={slug} locale={locale} />;
        case "product-index":
            return <ProductsIndex data={data} />;
        case "project-index":
            return <ProjectsIndex data={data} />;
        case "industry-index":
            return <IndustryIndex data={data} />;
        case "contact-index":
            return <ContactIndex data={data} />;
    }
}

export default Switcher;