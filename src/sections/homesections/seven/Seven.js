import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings } from "../../../slickSliderSettings";
import "./seven.css";

const Seven = () => {
  return (
    <div className="container Seven">
      <h2 className="sTitle">Resources for getting started</h2>
      <div className="inSeven">
        <Slider {...settings}>
          <Link to="blog/learn/how-to-easily-setup-a-metamask-wallet/">
            <div className="inSevenBox">
              <div className="inSevenBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWZur0.png" alt="" />
              </div>
              <div className="inSevenBoxTxt">
                <p>How to Easily Setup a MetaMask Wallet</p>
              </div>
            </div>
          </Link>
          <Link to="blog/learn/how-to-fund-metamask-with-eth/">
            <div className="inSevenBox">
              <div className="inSevenBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWzVEq.png" alt="" />
              </div>
              <div className="inSevenBoxTxt">
                <p>How to Fund MetaMask with ETH</p>
              </div>
            </div>
          </Link>
          <Link to="blog/learn/how-to-find-an-nft-you-love/">
            <div className="inSevenBox">
              <div className="inSevenBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWBBOq.png" alt="" />
              </div>
              <div className="inSevenBoxTxt">
                <p>How to Find an NFT You Love</p>
              </div>
            </div>
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default Seven;
