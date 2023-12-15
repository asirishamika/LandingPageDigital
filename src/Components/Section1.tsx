import comImage from "../assets/images/computer.png";
import "./Section1.css";
const Section1 = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-sm-6 col-12 ">
            <img src={comImage} className="img fluid sec-img" />
          </div>
          <div className="col-md-6 col-12 text-start">
            <p className="section-heading">Web & Mobile App Development</p>
            <p className="section-content">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button
              className="btn btn-primary btn-custom"
              style={{ background: "#F28D35", border: "none" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
