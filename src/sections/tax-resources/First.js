import TaxImg from "../../assets/tax-resources/logos.webp";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="inTrO">
      <div className="taxHhns">
        <div className="taxLogosImg"></div>
        <h1>NFT taxes, simplified.</h1>
        <p>
          We've partnered with CoinTracker, a leading crypto tax offering, to
          help you navigate your NFT taxes.
        </p>
        <p className="Yhns">
          Get started below to get free tax reports for up to 50 transactions in
          your first year and 10% off for everything else.
        </p>
        <div className="tax_Hhns">
          <Link to="" className="site_btn">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
