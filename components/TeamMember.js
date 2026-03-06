import Link from "next/link";

const teamMembers = [
  {
    role: "Marketing Manager",
    name: "Emma Taylor",
    image: "assets/img/team/05.jpg",
    delay: "200ms",
  },
  {
    role: "Fleet Supervisor",
    name: "James Anderson",
    image: "assets/img/team/06.jpg",
    delay: "400ms",
  },
  {
    role: "Warehouse Manager",
    name: "Sophia Brown",
    image: "assets/img/team/07.jpg",
    delay: "600ms",
  },
  {
    role: "Marketing Manager",
    name: "Christopher Mark",
    image: "assets/img/team/08.jpg",
    delay: "800ms",
  },
];

// const TeamMember = () => {
//   return (
//     <section className="team-wrapper team-2 section-padding pt-0">
//       <div className="container">
//         <div className="section-title text-center">
//           <div className="sub-title">
//             <span>OUR TEAM MEMBER</span>
//           </div>
//           <h2 className="split-text right">Meet with Our Expert</h2>
//           <p className="text-center">
//             Accelerate innovation with world-class tech teams We’ll match you{" "}
//             <br /> to an entire remote team of incredible freelance.
//           </p>
//         </div>
//         <div className="row mt-4">
//           <Team teamMembers={teamMembers} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamMember;

export const Team = ({ teamMembers }) => {
  return (
    <div className="row mt-4">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
          data-wow-delay={member.delay}
        >
          <div className="single-team-item">
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt='' />
            <div className="team-image">
              <img src={member.image} alt='' />
            </div>
            <div className="content">
              <p>{member.role}</p>
              <h4>
                <Link href="/teams-details">{member.name}</Link>
              </h4>
              <div className="social d-flex align-items-center justify-content-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-dribbble" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const TeamMember2 = () => {
  return (
    <section className="team-wrapper team-1 section-padding">
      <div className="shape-1">
        <img src="assets/img/shape/shape-15.png" alt='' />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR TEAM MEMBER</span>
          </div>
          <h2 className="split-text left">Meet with Our Expert</h2>
        </div>
        <p className="text-center">
          Connecting farms to global markets with export-grade products
          <br /> backed by quality assurance and timely delivery.
        </p>
        <div className="row justify-content-center">

          {[
            {
              image: "assets/img/team/t11.jpg",
              role: "CEO",
              name: "Praveen Raj B",
              link: 'https://www.youtube.com/watch?v=eAxlv1XVMNU',
              icon: 'fa-youtube',
              description:
                "Praveen Raj  is a visionary leader with 15+ years of experience in business strategy, innovation, and corporate leadership.",
              delay: "200ms",
            },
            {
              image: "assets/img/team/t22.jpg",
              role: "Business Partner and Ambassador",
              name: "Kiran Gowda",
              link: 'https://www.instagram.com/kirangowdadubai?igsh=MW1lcGJlNWFmZmU0aQ==',
              icon: 'fa-instagram',
              description:
                "Kiran Gowda is President of Vokkaligara Sangha Dubai and seems actively involved in organizing community events, sports activities, and social gatherings for the Indian community.",
              delay: "200ms",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="col-xl-6 col-lg-8 col-md-10 text-center wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="single-team-item text-center">

                {/* Image */}


                <div className="team-image d-flex justify-content-center mb-4 p-3">
                  <img
                    src={member.image}
                    className="image-round"
                    alt="team-img"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    }}
                  />
                </div>


                {/* Name */}
                <h3 className="mb-2 text-theme-ceo">{member.name}</h3>

                {/* Designation */}
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  gap: "30px"
                }} > <p className="fw-semibold mb-3">{member.role}</p> <a href={`${member.link}`} target="_blank"
                  rel="noopener noreferrer">
                    <i className={`fa-brands ${member.icon}`}></i>
                  </a></div>

                {/* Description */}
                <p className="px-3">{member.description}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section >
  );
};


// fa-youtube
