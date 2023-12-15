import logoImg from "../assets/images/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-strech cus-footer px-5">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col col-lg-5 col-md-8  mb-5">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img
              src={logoImg}
              alt="Logo"
              className="d-inline-block align-text-top me-3"
            />
          </a>
          <p className="text-desc">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col col-md-3 mb-3">
          <h5>Our Technologies</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                ReactJS
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Gatsby
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                NextJS
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                NodeJS
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0">
                GraphQL
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Laravel
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Our Services</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Social Media Marketing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Web & Mobile App Development
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Data & Analytics
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Google Marketing solutions
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Search Engine Optimization
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
