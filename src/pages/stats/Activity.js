import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RefreshIcon from "@mui/icons-material/Refresh";
import { buttons } from "../../allData/buttons";
import "./activity.css";
import { useState } from "react";

import { itemLists } from "../../allData/assetsPage";
import { Link } from "react-router-dom";
import Eventtype, {
  Chains,
  Collections,
} from "../../components/sideCheckBoxBar/ActivitySideBarMenu";
import ActivityAc from "./ActivityAc";

const Acitivity = () => {
  const [openSortBy, setOpenSortBy] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const [sideBarDrop1, setSideBarDrop1] = useState(true);
  const [sideBarDrop2, setSideBarDrop2] = useState(false);
  const [sideBarDrop3, setSideBarDrop3] = useState(false);
  const [sideBarDrop4, setSideBarDrop4] = useState(false);
  const [sideBarDrop5, setSideBarDrop5] = useState(false);
  const [sideBarDrop6, setSideBarDrop6] = useState(false);
  const [sideBarDrop7, setSideBarDrop7] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="stats">
      <div className="assetsHeader">
        <div className="inAssetsHeader">
          <div className="inAhL">
            <button className="filter_toggle" onClick={() => setOpenSideMenu()}>
              <FilterListIcon />
            </button>
          </div>
          <div className="inAhR">
            <div className="inAhRL">
              <div
                className="inAhRLuP"
                onClick={() => setOpenSortBy(!openSortBy)}
              >
                <input type="text" disabled placeholder="Last 90 days" />
                <KeyboardArrowDownIcon className="aRdown" />
              </div>
              {openSortBy && (
                <div className="sortByDropDown">
                  <ul>
                    <li>Last 7 days</li>
                    <li>Last 14 days</li>
                    <li>Last 30 days</li>
                    <li>Last 60 days</li>
                    <li>Last 90 days</li>
                    <li>Last years</li>
                    <li>All time</li>
                  </ul>
                </div>
              )}
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
                    <span>Event Type</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop1 && <Eventtype />}
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
            </div>
          </div>
        )}

        <div className="activityMainContent">
          <ActivityAc />
        </div>
      </div>
    </div>
  );
};

export default Acitivity;
