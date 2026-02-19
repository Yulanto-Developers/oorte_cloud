"use client";

import { useState } from "react";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import Swal from "sweetalert2";

const Page = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log("Submitting:", formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
          confirmButtonColor: "#0d6efd",
        });

        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: data.message || "Failed to send message.",
          confirmButtonColor: "#dc3545",
        });
      }
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Something went wrong!",
        confirmButtonColor: "#ffc107",
      });
    }

    setLoading(false);
  };


  return (
    <ZotechLayout>
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
                  <a href="tel:+919980043506">
                    <h4>+91 99800 43506</h4>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <div className="title">
                  <span>Our Location</span>
                  <h4>
                    #170, Sai Kranthi, Near Siddivinayaka Temple,
                    Panduranga Nagar, Bengaluru-560 076
                  </h4>
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
      <section className="contact-us-wrapper contact-us-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>Reach US</span>
            </div>
          </div>

          <div className="contact-us-inner">
            <form onSubmit={handleSubmit}>
              <div className="row g-5">
                {/* LEFT SIDE */}
                <div
                  className="col-xl-6 col-lg-12 col-md-12 pe-xl-0 wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <div className="contact-left">
                    <div className="row g-4">
                      <div className="col-lg-6 pe-0">
                        <span>First Name</span>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 pe-0">
                        <span>Last Name</span>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 pe-0">
                        <span>Your Email</span>
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 pe-0">
                        <span>Phone Number</span>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 pe-0">
                        <span>Country</span>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Your Country"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div
                  className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="contact-right ps-xl-5 ms-xl-3">
                    <div className="col-lg-12 mt-4">
                      <span>Your Message</span>
                      <div className="form-clt-big form-clt">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write a Message"
                          required
                        />
                      </div>
                    </div>

                    <div className="contact-btn d-flex align-items-center justify-content-between flex-wrap mt-4">
                      <button
                        type="submit"
                        className="theme-btn black-btn"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="office-google-map-wrapper wow fadeInUp">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2396424513827!2d77.59186737384724!3d12.892306316614278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c666f36a99%3A0x8ab576faacd4a81!2sSai%20Kranthi!5e0!3m2!1sen!2sin!4v1771331432797!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </ZotechLayout>
  );
};

export default Page;
