import { Link } from "react-router-dom";
import img1 from "../../assets/ventures/lightbulb.svg";

const First = () => {
  return (
    <div className="first">
      <div className="inFirst">
        <div className="left">
          <h1>
            Introducing <br />
            OpenSea Ventures
          </h1>
          <p>
            OpenSea Ventures is our brand new investment arm, supporting the
            founders who will define the future of open Web3 economies.
          </p>
          <div className="left_btn">
            <Link className="site_btn" to="#/">
              Learn more
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default First;
