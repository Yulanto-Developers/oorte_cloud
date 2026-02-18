const ChooseUs = ({
  wrapperclass = "choose-us-wrapper choose-us-3 section-padding",
}) => {
  return (
    <section className={wrapperclass}>
      <div className="container">
        <div className="row g-5">
          <div
            className="col-xl-6 col-lg-12 col-md-12 mt-xl-4 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="choose-us-content ms-xl-4 ps-xl-1">
              <div className="section-title">
                <div className="sub-title">
                  <span>WHY CHOOSE US</span>
                </div>
                <h2 className="split-text right">
                  Your Reliable   <br /> Global Trade<br />  Partner
                </h2>
              </div>
              <p className="mt-4">
                We are committed to delivering premium agricultural and fishery products with uncompromising quality, reliability, and global standards. Our structured sourcing process, scientific associations, and ethical practices ensure that every product meets international market expectations.
              </p>

            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="choose-us-images">

              <div className="row">

                <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-4">
                  <div
                    className="single-choose-item bg-cover mt-4 mt-xl-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,3,37,0.6), rgba(0,3,37,0.6)), url('/assets/img/why-choose/mission-1.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      minHeight: "250px",
                    }}
                  >
                    <h4 className='text-white'>Our Mission</h4>

                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-view" />
                      </div>
                      <h4>Our Mission</h4>
                      <p className="hover-font-size">
                        To build long-term partnerships by ensuring sustainable sourcing, strict quality control, and dependable global supply chains.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div
                    className="single-choose-item bg-cover mt-4 mt-xl-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,3,37,0.6), rgba(0,3,37,0.6)), url('/assets/img/why-choose/vision-1.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      minHeight: "250px",
                    }}
                  >
                    <h4 className="text-white">Our Vision</h4>

                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-view" />
                      </div>
                      <h4>Our Vision</h4>
                      <p className="hover-font-size">
                        To set new standards in global agricultural and fishery trade through trust, quality, and innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUs;
