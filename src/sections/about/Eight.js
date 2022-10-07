import React from "react";
import { Link } from "react-router-dom";

const Eight = () => {
  return (
    <div className="eight">
      <h2>Interested in joining us?</h2>
      <p className="eightP">Hop aboard and view our open positions</p>
      <p>
        <Link to="/#" className="site_btn">
          See open roles
        </Link>
      </p>
    </div>
  );
};

export default Eight;
