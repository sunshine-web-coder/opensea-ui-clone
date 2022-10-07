import { Link } from "react-router-dom";
import PartnersImg from "../../assets/partners/marketplace-illustration.svg";

const First = () => {
  return (
    <div className="tPartner">
      <div className="tPtxt">
        <h1>Welcome to the world’s largest NFT marketplace.</h1>
        <p>
          At OpenSea, we're excited about a brand new type of digital good often
          referred to as a non-fungible token, or NFT. NFTs have exciting new
          properties: they’re unique, provably scarce, liquid, and usable across
          multiple applications.
        </p>
        <p>
          We’re proud to be the first and largest marketplace for user-owned
          digital goods, with everything you need to buy and sell them in one
          place. <Link to="">Learn more about us</Link>
        </p>
      </div>
      <div className="tPimg">
        <img src={PartnersImg} alt="" />
      </div>
    </div>
  );
};

export default First;
