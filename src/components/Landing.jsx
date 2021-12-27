import "./Landing.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="landingWrapper">
      <h2>Craving for peace?</h2>
      <h1>
        Not sure where to go?
        <br />
        Perfect
      </h1>
      <p>
        Find and grow your new global team.
        <br />
        Never miss an opportunity again.
      </p>

      <div className="cardWrap">
       
       
        <div className="card">
          Make plans for
          <br />
          this weekend
          <h6>
            {"Check it out "}
            <FaRegArrowAltCircleRight />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Landing;
