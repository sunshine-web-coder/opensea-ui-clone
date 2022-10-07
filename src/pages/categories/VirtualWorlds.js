import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/catData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const VirtualWorlds = () => {
  const [expandDesc, setExpandDesc] = useState(false);

  return (
    <div className="sCateG categories">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueI1P0.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Virtual Worlds</h1>
        <div className={`sCateG_description ${expandDesc ? "expand" : ""}`}>
          <p>
            Virtual worlds are blockchain-fueled alternative realities where
            users can create and trade digital goods, play games, and display
            NFTs in galleries, among other intriguing use cases. Non-fungible
            token categories like art, collectibles, and domain names are all
            put to use in the metaverse, with ecosystems built and maintained by
            the crypto community.
          </p>
          <p>
            Buy and sell land parcels, wearables, and names from projects like
            Decentraland, Cryptovoxels, Somnium Space, and The Sandbox right
            here on OpenSea.
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
        <h3 className="cont">Trending collections in Virtual Worlds</h3>
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

export default VirtualWorlds;
