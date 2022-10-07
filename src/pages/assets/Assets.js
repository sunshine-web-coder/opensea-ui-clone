import FilterListIcon from "@mui/icons-material/FilterList";
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import GridOnIcon from "@mui/icons-material/GridOn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RefreshIcon from "@mui/icons-material/Refresh";
import "antd/dist/antd.css";
import {RadioButton} from "../../components/radioButton/RadioButton";
import "./assets.css";
import { useState } from "react";
import Status, {
  Category,
  Chains,
  Collections,
  Currency,
  Price,
  Quantity,
} from "../../components/sideCheckBoxBar/SideBarMenu";
import { itemLists } from "../../allData/assetsPage";
import { Link } from "react-router-dom";

const Assets = () => {
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const [sideBarDrop1, setSideBarDrop1] = useState(true);
  const [sideBarDrop2, setSideBarDrop2] = useState(false);
  const [sideBarDrop3, setSideBarDrop3] = useState(false);
  const [sideBarDrop4, setSideBarDrop4] = useState(false);
  const [sideBarDrop5, setSideBarDrop5] = useState(false);
  const [sideBarDrop6, setSideBarDrop6] = useState(false);
  const [sideBarDrop7, setSideBarDrop7] = useState(false);

  const [radioButtonActive, setRadioButtonActive] = useState("activeBtn1");
  const [toggleGrid, setToggleGrid] = useState(false);

  const radioChangeHandlerOne = (e) => {
    setRadioButtonActive(e.target.value);
    setToggleGrid(false)
  };
  const radioChangeHandlerTwo = (e) => {
    setRadioButtonActive(e.target.value);
    setToggleGrid(true)
  };
  
  const [isDropDownOption, setIsDropDownOption] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const [itemList] = useState([
    {
      label: "Recently listed",
      value: "Recently listed",
    },
    {
      label: "Recently created",
      value: "Recently created",
    },
    {
      label: "Recently sold",
      value: "Recently sold",
    },
    {
      label: "Recently received",
      value: "Recently received",
    },
    {
      label: "Ending soon",
      value: "Ending soon",
    },
    {
      label: "Price low to high",
      value: "Price low to high",
    },
    {
      label: "Price high to low",
      value: "Price high to low",
    },
    {
      label: "Highest last sale",
      value: "Highest last sale",
    },
    {
      label: "Oldest",
      value: "Oldest",
    },
  ]);

  return (
    <div className="assets">
      <div className="assetsHeader">
        <div className="inAssetsHeader">
          <div className="inAhL">
            <button
              className="filter_toggle"
              onClick={() => setOpenSideMenu(!openSideMenu)}
            >
              <FilterListIcon />
            </button>
          </div>
          <div className="inAhR">
            <div className="inAhRL">
              <div className="custom-dropdown">
                <div
                  className="inAhRLuP"
                  onClick={(e) => {
                    setIsDropDownOption(!isDropDownOption);
                  }}
                >
                  {selectedItemIndex !== null
                    ? itemList[selectedItemIndex].label
                    : "Sorted By"}
                </div>
                {isDropDownOption ? (
                  <div className="custom-dropdown-items AsssetLs">
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
            <div className="inAhLbtns">
              <RadioButton
                changed={radioChangeHandlerOne}
                id="2"
                isSelected={radioButtonActive === "activeBtn1"}
                label=<WindowOutlinedIcon className="inAhLbtnsIcon" />
                value="activeBtn1"
              />
              <RadioButton
                changed={radioChangeHandlerTwo}
                id="1"
                isSelected={radioButtonActive === "activeBtn2"}
                label=<GridOnIcon className="inAhLbtnsIcon" />
                value="activeBtn2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="assetMain">
        {openSideMenu && (
          <div className="assetMainSidebar">
            <div className="inAmS">
              <div>
                <li onClick={() => setSideBarDrop1(!sideBarDrop1)}>
                  <button>
                    <span>Status</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop1 && <Status />}
              </div>

              <div>
                <li onClick={() => setSideBarDrop2(!sideBarDrop2)}>
                  <button>
                    <span>Price</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop2 && <Price />}
              </div>

              <div>
                <li onClick={() => setSideBarDrop3(!sideBarDrop3)}>
                  <button>
                    <span>Quantity</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop3 && <Quantity />}
              </div>
              <div>
                <li onClick={() => setSideBarDrop4(!sideBarDrop4)}>
                  <button>
                    <span>Collections</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop4 && <Collections />}
              </div>
              <div>
                <li onClick={() => setSideBarDrop5(!sideBarDrop5)}>
                  <button>
                    <span>Chains</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop5 && <Chains />}
              </div>
              <div>
                <li onClick={() => setSideBarDrop6(!sideBarDrop6)}>
                  <button>
                    <span>Category</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop6 && <Category />}
              </div>
              <div>
                <li onClick={() => setSideBarDrop7(!sideBarDrop7)}>
                  <button>
                    <span>Currency</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop7 && <Currency />}
              </div>
            </div>
          </div>
        )}

        <div className="assetMainContent">
          <div className="aMcHeader">
            <button>
              <RefreshIcon />
            </button>
            <div className="itemsCounters">46,455,477 items</div>
          </div>
          <div className={`aMcDisplay ${toggleGrid ? "toggleGrid" : ""}`}>
            {itemLists.map((itemList) => {
              return (
                <Link to={itemList.colLink}>
                  <div className="aMcDBox">
                    <div className={`aMcDBoxImg ${toggleGrid ? "toggleChangeHeight" : ""}`}>
                      <img src={itemList.img} alt="" />
                    </div>
                    <div className="aMcDBoxArticle">
                      <div className="aMcBa">
                        <p>#{itemList.itemNumber}</p>
                        <div className="colName">{itemList.collectionName}</div>
                      </div>
                      <div className="price">
                        <p>price</p>
                        <div className="inPrice">
                          <img src={itemList.chainLogo} alt="" />{" "}
                          {itemList.price}
                        </div>
                      </div>
                      <div className="time">{itemList.time}</div>
                    </div>
                    <div className="buyBtn">
                      <button>Buy Now</button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
