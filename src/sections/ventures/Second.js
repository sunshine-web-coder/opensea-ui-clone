import multichain from "../../assets/ventures/svgIcon/multichain.svg";
import iconMoney from "../../assets/ventures/svgIcon/icon-money.svg";
import ticket from "../../assets/ventures/svgIcon/tickets.svg";
import nfts from "../../assets/ventures/svgIcon/nfts.svg";

const Second = () => {
  return (
    <div className="second">
      <div className="inSecond">
        <h1>
          OpenSea Ventures will focus investments <br />
          across four main themes
        </h1>
        <div className="flex">
          <div>
            <img src={multichain} alt="" />
            <p>
              The continued shift to a multichain world, both for fungible and
              non-fungible assets.
            </p>
          </div>
          <div>
            <img className="fImg" src={iconMoney} alt="" />
            <p>
              Creating and supporting NFT-related protocols and other
              crypto-native infrastructure.
            </p>
          </div>
          <div>
            <img src={ticket} alt="" />
            <p>
              Social and gaming projects serving as distribution mechanisms for
              crypto and NFT elements.
            </p>
          </div>
          <div>
            <img className="fImg" src={nfts} alt="" />
            <p>
              The emergence of NFT aggregators and analytics supporting activity
              on OpenSea and other NFT marketplace platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
