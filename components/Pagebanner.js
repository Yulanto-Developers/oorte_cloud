import Link from "next/link";

const Pagebanner = ({ pageName }) => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: 'url("assets/img/banner/page-banner.jpg")' }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {pageName}
            </h1>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
               <i className="fas fa-arrow-right"></i>
              </li>
              <li>{pageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pagebanner;
