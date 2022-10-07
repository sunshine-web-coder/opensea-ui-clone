import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/catData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const TradingCards = () => {
  const [expandDesc, setExpandDesc] = useState(false);

  return (
    <div className="sCateG categories">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueDZfF.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Trading Cards</h1>
        <div className={`sCateG_description ${expandDesc ? "expand" : ""}`}>
          <p>
            With unique assets traded and stored on the blockchain, classic
            games are taking on a new life. Decentralized networks mean players
            and collectors can now trade in-game items on third-party platforms
            and marketplaces, fundamentally changing the way online ownership is
            perceived in the digital era.
          </p>
          <p>
            Buy and sell digital collectible trading cards from the likes of
            Sorare, Gods Unchained, and $MEME on OpenSea.
          </p>
        </div>
        <button
          className="sCateG_descExpand"
          onClick={() => setExpandDesc(!expandDesc)}
        >
          {expandDesc ? (
            <KeyboardArrowUpIcon className="aRdown" />
          ) : (
            <KeyboardArrowDownIcon className="aRdown" />
          )}
        </button>
      </div>
      <div className="container sMain">
        <h3 className="cont">Trending collections in Trading Cards</h3>
        <div className="inSCateG">
          {solanaTrendingCollections.map((trendingData) => {
            return (
              <Link key={trendingData.id} to={trendingData.collectionLink}>
                <div className="trendingBox">
                  <div className="inTbox">
                    <div className="coverImg">
                      <img src={trendingData.coverImg} alt="" />
                    </div>
                    <div className="footerTrendingBox">
                      <div className="avatarImg">
                        <img src={trendingData.avatar} alt="" />
                      </div>
                      <div className="collectionName_verify_icon">
                        <div className="collectionName">
                          {trendingData.collectionName}
                        </div>
                        <VerifiedIcon className="verify-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TradingCards;
