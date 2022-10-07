import { Link } from "react-router-dom";

const Eight = () => {
  return (
    <div className="eightCon">
        <div className="eight">
      <h2>Interested in joining us?</h2>
      <p className="eightP">Hop aboard and view our open positions</p>
      <p>
        <Link to="/#" className="site_btn">
          See open roles
        </Link>
      </p>
    </div>
    </div>
    
  );
};

export default Eight;
