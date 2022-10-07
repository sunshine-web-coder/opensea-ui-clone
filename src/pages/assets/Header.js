import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { buttons } from "../../allData/buttons";

const Header = (props) => {
  const [openSortBy, setOpenSortBy] = useState(false);
  const [setOpenSideMenu] = useState(false);

  return (
    <div className="assetsHeader">
      <div className="inAssetsHeader">
        <div className="inAhL">
          <button
            className="filter_toggle"
            onClick={() => setOpenSideMenu()}
          >
            <FilterListIcon />
          </button>
        </div>
        <div className="inAhR">
          <div className="inAhRL">
            <div
              className="inAhRLuP"
              onClick={() => setOpenSortBy(!openSortBy)}
            >
              <input type="text" disabled placeholder="Sort by" />
              <KeyboardArrowDownIcon className="aRdown" />
            </div>
            {openSortBy && (
              <div className="sortByDropDown">
                <ul>
                  <li>Recently listed</li>
                  <li>Recently created</li>
                  <li>Recently sold</li>
                  <li>Recently received</li>
                  <li>Ending soon</li>
                  <li>Price low to high</li>
                  <li>Price high to low</li>
                  <li>Highest last sale</li>
                  <li>Oldest</li>
                </ul>
              </div>
            )}
          </div>
          <div className="inAhLbtns">
            {buttons.map((btn, index) => {
              return <button key={index}>{btn.icon}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
