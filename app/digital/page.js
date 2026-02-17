import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
    return (
        <ZotechLayout>
            <Pagebanner pageName="Digital Audio Guide" />
            {/* service Section Start */}
            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-5 justify-content-center">
                            <div className="section-title text-center">
                                <h2 className='text-center'>
                                    Digital Audio-Guide System
                                </h2>
                                <p>
                                    We aim to enhance visitor experience at historical monuments in Karnataka through a standardized, multilingual, device-based audio-guide system supported by QR codes and site maps, delivering an engaging and unified digital tour experience across major heritage locations.
                                </p>
                            </div>
                            <div className="col-lg-12">
                                <div className="service-details-image">
                                    <img src="assets/img/banner/banner-5.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="service-details-content">
                                    <h4>Digital Audio-Guide System by Oort E Cloud</h4>
                                    <p className="mt-3">
                                        A modern audio-guide system brings education, engagement, and cultural preservation while generating revenue and employment at monument locations.
                                    </p>
                                    <br />
                                    <p className="mt-3">
                                        A unified digital audio-tour experience for all major monuments in Karnataka.
                                    </p>
                                    <br />
                                    <p className="mt-3">
                                        To enhance visitor experience at historical monuments in Karnataka through a standardized, multilingual, device-based audio-guide system supported by QR codes and site maps.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Process Section Start */}
            {/* <WorkingProcess /> */}
        </ZotechLayout>
    );
};
export default page;
