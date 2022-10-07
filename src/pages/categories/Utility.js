import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/catData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const Utility = () => {
  const [expandDesc, setExpandDesc] = useState(false);

  return (
    <div className="sCateG categories">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueDGfC.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Utility</h1>
        <div className={`sCateG_description ${expandDesc ? "expand" : ""}`}>
          <p>
            Whether it's redeemable rewards or membership NFTs, a rising number
            of creators and developers are leveraging blockchain-backed tokens
            to build and support their communities. Buy and sell scarce digital
            goods from the likes of POAP, Urbit ID, and Polyient Games.
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
        <h3 className="cont">Trending collections in Utility</h3>
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

export default Utility;
