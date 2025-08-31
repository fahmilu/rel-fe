"use client";

import Image from "next/image";

export default function Images({ data, activeIndex, setActiveIndex }) {

    return (
        <div className="home__projects__images">
            {data.map((item, index) => (
                <div key={index} className={`home__projects__images__item ${activeIndex === index ? "active" : ""}`} onClick={() => setActiveIndex(index)}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`} alt={item.title} fill className="object-cover" />
                </div>
            ))}
        </div>
    );
}