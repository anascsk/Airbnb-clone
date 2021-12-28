import "./Landing.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Landing = () => {
  const history= useHistory()
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
       
       
        <div className="card" onClick={() => history.push('/searchlist')}>
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
