import React from "react";
import { Link } from "react-router-dom";

const Seven = () => {
  return (
    <div className="seven">
      <div className="sevenIn">
        <h2>Security Reports</h2>
        <p>
          OpenSea strives to be the most trustworthy and secure marketplace for
          NFTs. Finding and eliminating current vulnerabilities is a top
          priority. OpenSea highly values our partnership with the vulnerability
          hunting community and as such we ensure all reports are reviewed by
          security experts and acted upon appropriately.
        </p>
        <p>
          <Link to="/#">Submit a vulnerability here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Seven;
