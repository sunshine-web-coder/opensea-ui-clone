import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings } from "../../slickSliderSettings";
import dghImg from "../../assets/gas-free/article-supported-blockchain.webp";

const Third = () => {
  return (
    <div className="container sSix">
      <h2 className="sTitle">Cross-blockchain resources</h2>
      <p>
        Learn more about the different blockchains to start creating and selling
      </p>
      <div className="inSsix">
        <Slider {...settings}>
          <Link to="blog/learn/how-to-easily-setup-a-metamask-wallet/">
            <div className="inSsixBox">
              <div className="inSsixBoxImg">
                <img src={dghImg} alt="" />
              </div>
              <div className="inSsixBoxTxt">
                <p>Which blockchains does OpenSea support?</p>
              </div>
            </div>
          </Link>
          <Link to="blog/learn/how-to-fund-metamask-with-eth/">
            <div className="inSsixBox">
              <div className="inSsixBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWzVEq.png" alt="" />
              </div>
              <div className="inSsixBoxTxt">
                <p>How do I create and sell NFTs on Polygon?</p>
              </div>
            </div>
          </Link>
          <Link to="blog/learn/how-to-find-an-nft-you-love/">
            <div className="inSsixBox">
              <div className="inSsixBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWBBOq.png" alt="" />
              </div>
              <div className="inSsixBoxTxt">
                <p>How do I purchase NFTs on Polygon?</p>
              </div>
            </div>
          </Link>
          <Link to="blog/learn/how-to-find-an-nft-you-love/">
            <div className="inSsixBox">
              <div className="inSsixBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWBBOq.png" alt="" />
              </div>
              <div className="inSsixBoxTxt">
                <p>How do I transfer ETH from Ethereum to Polygon?</p>
              </div>
            </div>
          </Link>
        </Slider>
        
      </div>
    </div>
  );
};

export default Third;
