import DetailPageGallery from "../Gallery";
import RelatedProjects from "./Related";
const DetailPageProject = ({ data }) => {
    return (
        <>
            <section className="project__detail">
                <div className="project__detail__top">
                    <div className="container">
                        <h2>{data.title}</h2>
                        <p>{data.location}</p>
                    </div>
                </div>
                <div className="container">
                    {data.images.length > 0 && <DetailPageGallery data={data.images} />}
                    <div className="project__detail__info">
                        {data.info.map((item, index) => (
                            <div className="project__detail__info__item" key={index}>
                                <div>{item.title}</div>
                                <div dangerouslySetInnerHTML={{ __html: item.value }} />
                            </div>
                        ))}
                        {data.feedback.length > 0 && (
                            <div className="project__detail__info__item">
                                <div>Feedback</div>
                                <div>
                                    {data.feedback.map((item, index) => (
                                        <div key={index}>
                                            <p>{item.value}</p>
                                            <p className="text-[#868686] mt-2">{item.client}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <RelatedProjects />
        </>
    );
};

export default DetailPageProject;