import Button from "../../components/button/button";
import "./landing.scss"
import { Link } from "react-router-dom";

const LandingPage = () => {

  return(
    <div>
      <div className="enter_button">
      <Link to="/home"><Button >Enter</Button></Link>
      </div>
    </div>

    );
};

export default LandingPage;
