"use client";
// import ImageView from "@/components/ImageView";
import ScrollTop from "@/components/ScrollTop";
// import VideoPopup from "@/components/VideoPopup";
import { zotechUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
const ZotechLayout = ({
  children,
  header,
  footer,
  bodyClass = "zotech-body",
  cta = true,
}) => {
  useEffect(() => {
    document.body.className = bodyClass;
    zotechUtility.stickyHeader();
    zotechUtility.hamburgerMenu();
    zotechUtility.animation();
    zotechUtility.progressBar();
    zotechUtility.gsapAnimation();
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} />
        {children}
        <section className="cta-wrapper cta-1 my-2000">
          <div className="container">
            <div
              className="cta-inner bg-cover wow fadeInUp"
              data-wow-delay="300ms"
            >
              {/* <div className="shape">
                        <img
                          className="shape-1"
                          src="assets/img/cta/cta-shape-1.png"
                          alt=''
                        />
                        <img className="shape-2" src="assets/img/world.png" alt='' />
                      </div> */}
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="section-title">

                    <h2 className="text-theme pt-100">
                      We’re Delivering Best Customer Experience
                    </h2>
                  </div>
                  <Link href="contact" className="theme-btn mt-4">
                    Get Started Now
                  </Link>
                </div>
                {/* <div className="col-xl-6 col-lg-6 col-12">
                          <div className="images">
                            <img src="assets/img/cta/cta-img.jpg" alt='' />
                          </div>
                        </div> */}
              </div>
            </div>
          </div>
        </section>
        <Footer footer={1} cta={cta} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default ZotechLayout;
