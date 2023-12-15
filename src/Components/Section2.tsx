import SearchImage from "../assets/images/search.png";
import "./Section1.css";

const Section2 = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 text-start order-2 order-md-1">
            <p className="section-heading">Digital Strategy Consulting</p>
            <p className="section-content">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button
              className="btn btn-primary btn-custom"
              style={{ background: "#F28D35", border: "none" }}
            >
              Learn More
            </button>
          </div>
          <div className="col-sm-6 col-12 order-1">
            <img src={SearchImage} className="img fluid sec-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
