"use client";
import Image from "next/image";

const Industries = ({ data }) => {

    return (
        <section className="home__industries">
            <div className="container">
                <label className="title__label sm:text-left text-center">{data.intro}</label>
                <h3 className="sm:text-left text-center">{data.title}</h3>
                <div className="home__industries__list">
                    {data.items.map((industry, index) => (
                        <div key={index} className="home__industries__list__item">
                            <h4>{industry.title}</h4>
                            <div className="home__industries__list__item__image">
                                <Image src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${industry.image}`} alt={industry.title} fill className="object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Industries;