import First from "../../sections/gas-free/First";
import Second from "../../sections/gas-free/Second";
import Three from "../../sections/gas-free/Three";
import { Link } from "react-router-dom";

import "./gasFree.css";

const GasFree = () => {
  return (
    <div className="gasfree">
      <First />
      <Second />
      <Three />
      <div className="gUnna">
        <div className="">
          <Link className="site_btn" to="/#">
            Learn more on our Help Center
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GasFree;
