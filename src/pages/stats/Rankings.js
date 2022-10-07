import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkIcon from "@mui/icons-material/Link";
import { useState } from "react";
import { category, chainDetails, time } from "../../allData/catData";
import RankingRe from "./RankingRe";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./stats.css";

const Rankings = () => {
  const [menuDrop2, setMenuDrop2] = useState(false);
  const [menuDrop3, setMenuDrop3] = useState(false);
  const [timeListDropDownOption, setTimeListDropDownOption] = useState(false);
  const [categoryListDropDownOption, setCategoryListDropDownOption] =
    useState(false);
  const [chainDetailsDropDownOption, setChainDetailsListDropDownOption] =
    useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedItemIndex2, setSelectedItemIndex2] = useState(null);
  const [selectedItemIndex3, setSelectedItemIndex3] = useState(null);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "1h", value: "1" },
    { name: "6h", value: "2" },
    { name: "24h", value: "3" },
    { name: "7d", value: "4" },
    { name: "30d", value: "5" },
    { name: "All", value: "6" },
  ];

  const [timeList] = useState(radios);
  const [categoryList] = useState(category);
  const [chainDetailsList] = useState(chainDetails);

  return (
    <div className="stats">
      <div className="statsHeader">
      <div className="statSHeaderTitle">
        
      </div>
        <h1 className="sHtitle">Collection stats</h1>
        <p>
          The top NFTs on OpenSea, ranked by volume, floor price and other
          statistics.
        </p>
        <div className="statsInputContainer">
          <div className="statsInputContainerLeft">
            <div className="sIBox sIBoxX">
              <div className="custom-dropdown">
                <div
                  className="inAhRLuP"
                  onClick={(e) => {
                    setCategoryListDropDownOption(!categoryListDropDownOption);
                  }}
                >
                  {selectedItemIndex2 !== null
                    ? categoryList[selectedItemIndex2].label
                    : "All categories"}
                </div>
                {categoryListDropDownOption ? (
                  <div className="custom-dropdown-items AsssetLs">
                    {categoryList.map((item, index) => {
                      return (
                        <ul key={item.value} className="dropdown-item">
                          <li
                            onClick={(e) => {
                              setSelectedItemIndex2(index);
                              setCategoryListDropDownOption(false);
                            }}
                          >
                            <img src={item.catImg} alt="catImg" />
                            {item.label}
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="sIBox sIBoxX">
              <div className="custom-dropdown">
                <div
                  className="inAhRLuP"
                  onClick={(e) => {
                    setChainDetailsListDropDownOption(
                      !chainDetailsDropDownOption
                    );
                  }}
                >
                  {selectedItemIndex3 !== null
                    ? chainDetailsList[selectedItemIndex3].label
                    : "Ethereum"}
                </div>
                {chainDetailsDropDownOption ? (
                  <div className="custom-dropdown-items AsssetLs">
                    {chainDetailsList.map((item, index) => {
                      return (
                        <ul key={item.value} className="dropdown-item">
                          <li
                            onClick={(e) => {
                              setSelectedItemIndex3(index);
                              setChainDetailsListDropDownOption(false);
                            }}
                          >
                            <img src={item.chainImg} alt="chainImg" />
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
          <div>
            <div className="sIBoxX">
              <div className="custom-dropdown">
                <div className="inAhRLuPRa">
                  <div className="RankRadioBtn">
                    <ButtonGroup>
                      {radios.map((radio, idx) => (
                        <ToggleButton
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={
                            idx % 2 ? "outline-danger" : "outline-danger"
                          }
                          name="radio"
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                          {radio.name}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                  </div>

                  <div className="RankTimeDropDnw">
                    <div
                      className="RankTimeDropDnwValue"
                      onClick={(e) => {
                        setTimeListDropDownOption(
                          !timeListDropDownOption
                        );
                      }}
                    >
                      {selectedTime !== null
                        ? timeList[selectedTime].name
                        : "24h"}
                    </div>
                    {timeListDropDownOption ? (
                      <div className="custom-dropdown-items AsssetLs">
                        {timeList.map((item, index) => {
                          return (
                            <ul key={item.name} className="dropdown-item">
                              <li
                                onClick={(e) => {
                                  setSelectedTime(index);
                                  setTimeListDropDownOption(false);
                                }}
                              >
                                {item.name}
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <RankingRe /> */}
    </div>
  );
};

export default Rankings;
