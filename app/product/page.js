import Pagebanner from "@/components/Pagebanner";
import Pricing from "@/components/Pricing";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {
    const servicesData = [
        {
            id: 1,
            title: "Banana Stem Juice",
            image: "/assets/img/products/pro-sec/img-1.jpg",
            icon: "/assets/img/icons/product (1).png",
            delay: "200ms",
            description:
                "Nutrient-rich and naturally processed for health and wellness applications.",
        },
        {
            id: 2,
            title: "First-Grade Fish",
            image: "/assets/img/products/pro-sec/img-2.jpg",
            icon: "/assets/img/icons/product (2).png",
            delay: "400ms",
            description:
                "Fresh, high-quality fish sourced and handled under strict quality standards.",
        },
        {
            id: 3,
            title: "Raw Seaweed",
            image: "/assets/img/products/pro-sec/img-3.jpg",
            icon: "/assets/img/icons/product (3).png",
            delay: "600ms",
            description:
                "Naturally harvested seaweed suitable for food, agriculture, and industrial use.",
        },
        {
            id: 4,
            title: "Mosambi (Sweet Lime)",
            image: "/assets/img/products/pro-sec/img-4.jpg",
            icon: "/assets/img/icons/product (4).png",
            delay: "200ms",
            description:
                "Fresh and juicy citrus fruit sourced from quality farms.",
        },
        {
            id: 5,
            title: "Coconut",
            image: "/assets/img/products/pro-sec/img-5.jpg",
            icon: "/assets/img/icons/product (5).png",
            delay: "400ms",
            description:
                "Premium coconuts supplied for food, oil, and industrial use.",
        },
        {
            id: 6,
            title: "Areca Nut",
            image: "/assets/img/products/pro-sec/img-6.jpg",
            icon: "/assets/img/icons/product (6).png",
            delay: "600ms",
            description:
                "Carefully selected areca nuts processed for export-quality standards.",
        },
        {
            id: 7,
            title: "Rice",
            image: "/assets/img/products/pro-sec/img-7.jpg",
            icon: "/assets/img/icons/product (7).png",
            delay: "200ms",
            description:
                "High-quality rice varieties sourced to meet international market needs.",
        },
        {
            id: 8,
            title: "Millets (Jowar, Ragi)",
            image: "/assets/img/products/pro-sec/img-8.jpg",
            icon: "/assets/img/icons/product (8).png",
            delay: "400ms",
            description:
                "Nutritious and naturally grown millets suitable for health-focused markets.",
        },
    ];
    return (
        <ZotechLayout>
            <Pagebanner pageName="Our Products" />
            <section className="service-wrapper service-4 section-bg section-padding">
                <div className="container">
                    <div className="service-inner text-center overflow-hidden">
                        <div className="row gy-xxl-5">
                            {servicesData.map((service, index) => (
                                <div
                                    key={index}
                                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"
                                >
                                    <div
                                        className="signle-service-item wow fadeInUp"
                                        data-wow-delay={service.delay}
                                    >
                                        <div
                                            className="service-bg bg-cover"
                                            style={{
                                                backgroundImage: `url(${service.image})`,
                                            }}
                                        />

                                        {/* <div className="icon">
                                            <i className={service.icon} />
                                        </div> */}

                                        <div className="line mb-4" />

                                        <h4>
                                            <Link href="services-details">{service.title}</Link>
                                        </h4>

                                        <p className="pt-3">
                                            {service.description}
                                        </p>

                                        <Link href="services-details" className="infu-btn">
                                            Read More
                                            <i className="fa fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div
                            className="page-nav-wrap mt-5 text-center wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <ul>
                                <li>
                                    <a className="page-numbers" href="#">
                                        <i className="far fa-angle-right" />
                                    </a>
                                </li>
                                <li>
                                    <a className="page-numbers" href="#">
                                        01
                                    </a>
                                </li>
                                <li>
                                    <a className="page-numbers" href="#">
                                        02
                                    </a>
                                </li>
                                <li>
                                    <a className="page-numbers" href="#">
                                        03
                                    </a>
                                </li>
                                <li>
                                    <a className="page-numbers" href="#">
                                        <i className="far fa-angle-right" />
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Pricing Section Start */}
            {/* <section className="pricing-wrapper pricing-1 style-2 section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="sub-title">
                            <span>PRICING PLAN</span>
                        </div>
                        <h2>
                            Pricing That Suits <br /> Your Needs
                        </h2>
                    </div>
                    <Pricing />
                </div>
            </section> */}
            {/* Process Section Start */}
            {/* <WorkingProcess /> */}
        </ZotechLayout>
    );
};
export default page;
