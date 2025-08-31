import Image from "next/image";
import Link from "next/link";
import { getLocalizedHref } from "@/utils/navigation";
import { fetchData } from "@/services/api";

const Products = async ({ data, locale }) => {
    const { data: products } = await fetchData('products', locale);
    return (
        <section className="home__products">
            <div className="container">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <label className="title__label">{data.intro}</label>
                    <h4 className="text-white">{data.title}</h4>
                </div>
                <div className="home__products__list">
                    {products.slice(0, 3).map((product, index) => (
                        <Link href={`${getLocalizedHref('products', locale)}/${product.slug}`} className="home__products__list__item" key={index}>
                            <div className="home__products__list__item__image">
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.image}`} alt={product.name} fill className="object-cover" />
                            </div>
                            <div className="home__products__list__item__content">
                                <h3 className="text-white">{product.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="home__products__footer">
                    <Link href={getLocalizedHref('products', locale)} className="btn btn__primary max-sm:w-full">{data.button_label}</Link>
                </div>
            </div>
        </section>
    );
};

export default Products;