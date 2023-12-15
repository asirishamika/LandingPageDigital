import "./HeroSec.css";
import mainImage from "../assets/images/andy-kelly-0E_vhMVqL9g-unsplash 2.png";

export const HeroSec = () => {
  return (
    <div className="container-xxl-extends container-sm-strech p-0 d-flex justify-content-center flex-column col-xxl-12 con-hero">
      <img src={mainImage} className="img-fluid robo-img" alt="image robut" />

      <div className="card col-12 col-lg-6 col-xl-5  hero-card">
        <div className="card-body">
          <p className="card-text">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <a
            href="#"
            className="btn btn-primary btn-custom"
            style={{ background: "#F28D35", border: "none" }}
          >
            Get free consultation
          </a>
        </div>
      </div>
    </div>
  );
};
