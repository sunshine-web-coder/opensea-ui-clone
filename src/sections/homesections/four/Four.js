import { useState } from "react";
import { Link } from "react-router-dom";
import TopCollections from "../../../components/topCollections/TopCollections";

import "./four.css";

const Four = () => {
  const [isDropDownOption, setIsDropDownOption] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const [itemList, setItemList] = useState([
    { label: "last 24 hours", value: "last 24 hours" },
    { label: "last 7 days", value: "last 7 days" },
    { label: "last 30 days", value: "last 30 days" },
  ]);

  return (
    <div className="container Sth">
      <div className="inSth">
        <div className="inSth-title">
          <h2 className="sTitle">Top collections over</h2>
          <div className="inSth-timeDropDown">
            <div className="custom-dropdown">
              <div
                className="custom-dropdown-title"
                onClick={(e) => {
                  setIsDropDownOption(!isDropDownOption);
                }}
              >
                {selectedItemIndex !== null
                  ? itemList[selectedItemIndex].label
                  : "last 24 hours"}
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
        <TopCollections />
        <div className="goToRankingBtnBox">
          <Link className="site_btn goToRankingBtn" to="/rankings">
            Go to Rankings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Four;
