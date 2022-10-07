import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings } from "../../slickSliderSettings";
import Img1 from "../../assets/about/news/forbes.png";
import Img1s from "../../assets/about/news/forbes.svg";

const Six = () => {
  return (
    <div className="six">
      <h2>You might have read about us in the news</h2>
      <p>If not, here are just a few stories about OpenSea</p>
      <div className="slickHGDmK">
        <Slider {...settings}>
          <div className="slickBox">
            <Link to="">
              <div className="slickBoxIn">
                <div className="slickBoxInImg">
                  <img src={Img1} alt="" />
                </div>
                <div className="slickBoxInTxt">
                  <img src={Img1s} alt="" />
                  <p>
                    What Every Crypto Buyer Should Know About OpenSea, The King
                    Of The NFT Market
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="slickBox">
            <Link to="">
              <div className="slickBoxIn">
                <div className="slickBoxInImg">
                  <img src={Img1} alt="" />
                </div>
                <div className="slickBoxInTxt">
                  <img src={Img1s} alt="" />
                  <p>
                    What Every Crypto Buyer Should Know About OpenSea, The King
                    Of The NFT Market
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="slickBox">
            <Link to="">
              <div className="slickBoxIn">
                <div className="slickBoxInImg">
                  <img src={Img1} alt="" />
                </div>
                <div className="slickBoxInTxt">
                  <img src={Img1s} alt="" />
                  <p>
                    What Every Crypto Buyer Should Know About OpenSea, The King
                    Of The NFT Market
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="slickBox">
            <Link to="">
              <div className="slickBoxIn">
                <div className="slickBoxInImg">
                  <img src={Img1} alt="" />
                </div>
                <div className="slickBoxInTxt">
                  <img src={Img1s} alt="" />
                  <p>
                    What Every Crypto Buyer Should Know About OpenSea, The King
                    Of The NFT Market
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="slickBox">
            <Link to="">
              <div className="slickBoxIn">
                <div className="slickBoxInImg">
                  <img src={Img1} alt="" />
                </div>
                <div className="slickBoxInTxt">
                  <img src={Img1s} alt="" />
                  <p>
                    What Every Crypto Buyer Should Know About OpenSea, The King
                    Of The NFT Market
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="slickBox">
            <Link to="">
              <div className="slickBoxIn">
                <div className="slickBoxInImg">
                  <img src={Img1} alt="" />
                </div>
                <div className="slickBoxInTxt">
                  <img src={Img1s} alt="" />
                  <p>
                    What Every Crypto Buyer Should Know About OpenSea, The King
                    Of The NFT Market
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
      <div className="sixFooter">
        <p>
          For press inquiries, contact <Link to="/#">press@opensea.io</Link>
        </p>
      </div>
    </div>
  );
};

export default Six;
