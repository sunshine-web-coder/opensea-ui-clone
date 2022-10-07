import { Link } from "react-router-dom";
import GasImg from "../../assets/gas-free/gas-pump.svg";

const First = () => {
  return (
    <div className="tPartner">
      <div className="tPtxt">
        <h1>Introducing a gas-free NFT marketplace, on Polygon.</h1>
        <p>
          While we're proud to be the first and largest NFT marketplace, we're
          even prouder to be the first to provide cross-blockchain support,
          starting with a gas-free marketplace on the Polygon blockchain.
        </p>
        <p>
          That's right! Buyers no longer have to pay blockchain fees when making
          trades on OpenSea, and creators can fully earn their way into crypto
          for the first time.
        </p>
        <p><Link to="/#" className="site_btn">Start creating</Link></p>
      </div>
      <div className="tPimg">
        <img src={GasImg} alt="" />
      </div>
    </div>
  );
};

export default First;
