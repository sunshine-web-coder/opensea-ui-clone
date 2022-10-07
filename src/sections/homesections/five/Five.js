import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import AllTrendingData from "../../../allData/allTrendingData.json";
import { settings } from "../../../slickSliderSettings";
import useOnClickOutside from "../../../components/use-onclick-outside";

import "./five.css";

const Five = () => {
  const [isDropDownOption, setIsDropDownOption] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const [itemList, setItemList] = useState([
    {
      label: "All Categories",
      value: "All Categories",
      imgPath: "https://i.im.ge/2022/07/09/uHnczM.png",
    },
    {
      label: "Solana NFTs",
      value: "Solana NFTs",
      imgPath: "https://i.im.ge/2022/07/09/uHn8FY.png",
    },
    {
      label: "Art",
      value: "Art",
      imgPath: "https://i.im.ge/2022/07/09/uHnWR4.png",
    },
    {
      label: "Collectibles",
      value: "Collectibles",
      imgPath: "https://i.im.ge/2022/07/09/uHnBW0.png",
    },
    {
      label: "Domain Names",
      value: "Domain Names",
      imgPath: "https://i.im.ge/2022/07/09/uHn4jW.png",
    },
    {
      label: "Music",
      value: "Music",
      imgPath: "https://i.im.ge/2022/07/09/uHnnOr.png",
    },
    {
      label: "Photography",
      value: "Photography",
      imgPath: "https://i.im.ge/2022/07/09/uHnf3p.png",
    },
    {
      label: "Sports",
      value: "Sports",
      imgPath: "https://i.im.ge/2022/07/09/uHnvzm.png",
    },
    {
      label: "Trading Cards",
      value: "Trading Cards",
      imgPath: "https://i.im.ge/2022/07/09/uHnHs1.png",
    },
    {
      label: "Utility",
      value: "Utility",
      imgPath: "https://i.im.ge/2022/07/09/uHnk4P.png",
    },
    {
      label: "Virtual Worlds",
      value: "Virtual Worlds",
      imgPath: "https://i.im.ge/2022/07/09/uHnptf.png",
    },
  ]);

  return (
    <div className="container SF">
      <div className="inSF">
        <div className="inSF-title">
          <h2 className="sTitle">Trending in</h2>
          <div className="inSF-timeDropDown">
            <div className="custom-dropdown">
              <div
                className="custom-dropdown-title"
                onClick={(e) => {
                  setIsDropDownOption(!isDropDownOption);
                }}
              >
                {selectedItemIndex !== null
                  ? itemList[selectedItemIndex].label
                  : "all categories"}
              </div>
              {isDropDownOption ? (
                <div className="custom-dropdown-items">
                  {itemList.map((item, index) => {
                    return (
                      <ul key={item.value} className="dropdown-item">
                        <li
                          onClick={(e) => {
                            setSelectedItemIndex(index);
                            setIsDropDownOption(false);
                          }}
                        >
                          <img src={item.imgPath} alt="imgPath" />
                          {item.label}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="trending_show_slide">
          <Slider {...settings}>
            {AllTrendingData.map((trendingData) => {
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Five;
