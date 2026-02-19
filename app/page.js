'use client'

import Counter from "@/components/Counter";
import Testimonial from "@/components/slider/Testimonial";
import HeroSlider from "@/components/slider/HeroSlider";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FloatingWhatsApp } from "../components/floatingWhatsapp";
const page = () => {

  const box = [{
    title: "Commitment to Quality and Freshness",
    icons: "/assets/img/icons/icon-1.png",
    list1: 'Scientifically Supported Sourcing',
    list2: 'Fresh & Export-Grade Products'
  },
  {
    title: "Reliable Sourcing and Timely Delivery",
    icons: "/assets/img/icons/icon-2.png",
    list1: 'Strong Supplier Network',
    list2: 'On-Time Global Distribution'
  },
  {
    title: "Sustainable and Ethical Practices",
    icons: "/assets/img/icons/icon-3.png",
    list1: 'Eco-Friendly Operations',
    list2: 'Fair and Transparent Trade'
  },
  {
    title: "Long-Term Partnerships With Clients and Suppliers",
    icons: "/assets/img/icons/icon-4.png",
    list1: 'Trusted Global Relationships',
    list2: 'Commitment to Mutual Success'
  }];

  const list = [
    { lists: 'ICAR – National Research Centre for Banana' },
    { lists: 'Enabling  us to deliver scientifically supported' },
    { lists: 'High-quality agricultural products.' },
  ];


  const servicesData = [
    {
      id: 1,
      title: "Banana Stem Juice",
      image: "/assets/img/products/img-1 (2).jpg",
      icon: "/assets/img/icons/product (1).png",
      delay: "200ms",
      description:
        "Nutrient-rich and naturally processed for health and wellness applications.",
    },
    {
      id: 2,
      title: "First-Grade Fish",
      image: "/assets/img/products/img-2.jpg",
      icon: "/assets/img/icons/product (2).png",
      delay: "400ms",
      description:
        "Fresh, high-quality fish sourced and handled under strict quality standards",
    },
    {
      id: 3,
      title: "Raw Seaweed",
      image: "/assets/img/products/img-3.jpg",
      icon: "/assets/img/icons/product (3).png",
      delay: "600ms",
      description:
        "Naturally harvested seaweed suitable for food, agriculture, and industrial use.",
    },
    {
      id: 4,
      title: "Mosambi (Sweet Lime)",
      image: "/assets/img/products/img-4.jpg",
      icon: "/assets/img/icons/product (4).png",
      delay: "600ms",
      description:
        "Fresh and juicy citrus fruit sourced from quality farms.",
    },
    {
      id: 5,
      title: "Coconut",
      image: "/assets/img/products/img-5.jpg",
      icon: "/assets/img/icons/product (5).png",
      delay: "600ms",
      description:
        "Premium coconuts supplied for food, oil, and industrial use.",
    },
    {
      id: 6,
      title: "Areca Nut",
      image: "/assets/img/products/img-6.jpg",
      icon: "/assets/img/icons/product (6).png",
      delay: "600ms",
      description:
        "Carefully selected areca nuts processed for export-quality standards.",
    },
    {
      id: 7,
      title: "Rice",
      image: "/assets/img/products/img-7.jpg",
      icon: "/assets/img/icons/product (7).png",
      delay: "600ms",
      description:
        "High-quality rice varieties sourced to meet international market needs.",
    },
    {
      id: 8,
      title: "Millets (Jowar, Ragi)",
      image: "/assets/img/products/img-8.jpg",
      icon: "/assets/img/icons/product (8).png",
      delay: "600ms",
      description:
        "Nutritious and naturally grown millets suitable for health-focused markets.",
    },
  ];


  return (
    <Fragment>
      <ZotechLayout header={1} footer={1}>
        {/* Hero Section Start */}
        <section className="hero-section hero-3">
          <HeroSlider />
        </section>
        {/* features Section Start */}
        <section className="features-wrapper features-1">
          <div className="container">
            <div className="row">

              {
                box.map((item, index) => (
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                    data-wow-delay="200ms" key={index}
                  >
                    <div className="single-feature-item">
                      <div className="icon">
                        {/* <i className="flaticon-web-development" /> */}
                        <img src={item.icons} className="icons-h-w" />
                      </div>
                      <h4>
                        <Link href="services-details">
                          {item.title}
                        </Link>
                      </h4>
                      <ul>
                        <li className='card-flex-cls'>
                          <i className="fas fa-check-circle" />
                          <span>{item.list1}</span>
                        </li>
                        <li className='card-flex-cls'>
                          <i className="fas fa-check-circle" />
                          <span>{item.list2}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* About Section Start */}
        <section className="about-wrapper about-1 section-padding">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-xl-7 col-lg-12 col-md-12 col-12 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <div className="about-images">
                  <div className="image-1">
                    <img src="assets/img/about/about-2.jpg" alt="img" />
                  </div>
                  <div className="image-2 cls-height">
                    {/* <img src="assets/img/about/about-2.jpg" alt="img" /> */}
                    <video
                      src="/assets/img/about/v-about.mp4"
                      controls
                      autoPlay
                      muted
                      loop
                      className=""
                    >
                    </video>

                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-12 col-md-12 col-12 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="about-content mt-4 ms-xxl-4">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>WELCOME TO OORT E CLOUD</span>
                    </div>
                    <h2 className="split-text right">
                      Delivering Excellence in Global  <br /> &amp; Import & Export
                    </h2>
                  </div>
                  <p>
                    We have a broad vision to serve global markets through the import and export of
                    high-quality agricultural and fishery products. Our operations focus on sourcing
                    and supplying premium products such as Spices, Bananas, Coconuts, Rice, Millets,
                    and Fishery Products to customers around the world.
                  </p>
                  <p className="font-cls">We are associated with</p>
                  <ul>
                    {
                      list.map((item, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle" />
                          {item.lists}
                        </li>
                      ))
                    }
                  </ul>
                  <div className="about-infu">
                    <Link href='/about' className="theme-btn black-btn">
                      More About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service Section Start */}
        <section className="service-wrapper service-1 section-bg section-padding">
          <div className="shapes">
            <img className="shape-1" src="assets/img/shape/shape-1.png" alt='' />
            <img className="shape-2" src="assets/img/world.png" alt='' />
          </div>
          <div className="container">
            <div className="service-inner">
              <div className="row">
                <div
                  className="col-xl-7 col-lg-6 col-md-12 col-12  wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <div className="countbox">
                    <h3>
                      <span className="count">
                        <Counter end={10} />
                      </span>
                      +
                    </h3>
                    <p>Years of Experience</p>
                  </div>
                  <div className="section-title mt-4">
                    <h2 className="split-text left why-choose-us-left">
                      Oort E Cloud Provide Best Service in Market
                    </h2>
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-6 col-md-12 col-12  wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="section-title">
                    <div className="sub-title">
                      <span>WHY CHOOSE US</span>
                    </div>
                    <h2 className="split-text right">

                    </h2>
                  </div>
                  <div className="title">
                    <h3 className='font-h3-tags'>
                      We are committed to delivering premium agricultural and fishery products with uncompromising quality, reliability, and global standards. Our structured sourcing process, scientific associations, and ethical practices ensure that every product meets international market expectations.
                    </h3>
                  </div>

                </div>
              </div>
              <div className="mt-20">
                <div className="section-title text-center">
                  <div className="sub-title">
                    <span>Our Products</span>
                  </div>
                  <h2 className="split-text right">

                  </h2>
                </div>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                  }}
                >
                  {servicesData.map((service) => (
                    <SwiperSlide key={service.id}>
                      <div className="single-service-item">

                        <div className="image">
                          <img src={service.image} alt={service.title} />
                        </div>

                        <div className="hover-content">
                          <div className="icon">
                            <img src={service.icon} className="icons-h-w" alt="" />
                          </div>

                          <h4 className="text-white">
                            {/* <Link href="services-details"> */}
                            {service.title}
                            {/* </Link> */}
                          </h4>
                        </div>

                      </div>
                    </SwiperSlide>

                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial Section Start */}
        <section className="testimonial-wrapper testimonial-1 section-padding pb-0">
          <div className="shape">
            <img className="shape-1" src="assets/img/shape/shape-13.png" alt='' />
            <img className="shape-2" src="assets/img/shape/shape-14.png" alt='' />
          </div>
          <div className="container ">
            <div className="section-title text-center">
              <div className="sub-title">
                <span>OUR TESTIMONIAL</span>
              </div>
              <h2 className="split-text left">What our clients say about us</h2>
              <p>
                Accelerating global trade with premium agricultural and{" "}
                <br />  fishery exports you can trust.
              </p>
            </div>
            <div className="testimonial-inner overflow-hidden">
              <Testimonial />
            </div>
          </div>
        </section>

      </ZotechLayout>
    </Fragment>
  );
};
export default page;
