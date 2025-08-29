import { HomeBanner, PageBanner } from "./Banner";
import { About, Quote, Products, Industries, Projects } from "./Home";
import { Products as ProductsIndex, Projects as ProjectsIndex, Industry as IndustryIndex, Contact as ContactIndex } from "./Pages";

const Switcher = ({ type, data, slug, locale }) => {
    switch (type) {
        case "home-banner":
            return <HomeBanner data={data} />;
        case "home-about":
            return <About data={data} />;
        case "home-quotes":
            return <Quote data={data} />;
        case "home-products":
            return <Products data={data} />;
        case "home-industries":
            return <Industries data={data} />;
        case "home-projects":
            return <Projects data={data} />;
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