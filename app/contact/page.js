import { Contact2 } from "@/components/Contact";
import CTA from "@/components/CTA";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {
  return (
    <ZotechLayout >
      <Pagebanner pageName="Contact Us" />
      {/* Contact Info Section Start */}
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card card-height d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-telephone" />
                </div>
                <div className="title">
                  <span>Call Us</span>
                  <a href='tel+919980043506' >
                    <h3>+91 99800 43506</h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card  d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <div className="title">
                  <span>Our Location</span>
                  <h4>#170, Sai Kranthi, Near Siddivinayaka Temple, Panduranga Nagar, Bengaluru-560 076</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card card-height d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="title">
                  <span>Mail us</span>
                  <a href="mailto:oortecloud@gmail.com">
                    <h4>oortecloud@gmail.com</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact-us Section Start */}
      <Contact2 />
      {/* Map Section Start */}
      <div className="office-google-map-wrapper wow fadeInUp">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2396424513827!2d77.59186737384724!3d12.892306316614278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c666f36a99%3A0x8ab576faacd4a81!2sSai%20Kranthi!5e0!3m2!1sen!2sin!4v1771331432797!5m2!1sen!2sin" style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
      {/* <CTA wrapperClass="cta-wrapper cta-2 style-3 section-bg" /> */}
    </ZotechLayout>
  );
};
export default page;
