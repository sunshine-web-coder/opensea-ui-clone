import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/catData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const Sports = () => {
  const [expandDesc, setExpandDesc] = useState(false);

  return (
    <div className="sCateG categories">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueDYMa.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Sports</h1>
        <div className={`sCateG_description ${expandDesc ? "expand" : ""}`}>
          <p>
            Sporting brands look after some of the most valuable intellectual
            property on the planet, and companies like Sorare are selling it in
            the form of digital trading cards right here on our marketplace.
            We've also got Formula 1 NFTs from Animoca Brands and anticipate a
            surge of interest from global sports teams looking to tokenize and
            distribute their collectibles over the coming years. Browse, buy,
            and sell non-fungible tokens from the worlds of golf, football,
            racing, and more.
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
        <h3 className="cont">Trending collections in Sports</h3>
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

export default Sports;
