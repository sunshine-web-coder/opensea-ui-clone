import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VerifiedIcon from "@mui/icons-material/Verified";
import SearchIcon from "@mui/icons-material/Search";
import {
  assetsData,
  chainDetails,
  categories,
  currency,
  quantity,
} from "../../allData/assetsPage";
import "./sideBarMenu.css";

export default function Eventtype() {
  return (
    <>
      <ul className="inAmSdrop">
        <li>
          <label>
            Sales
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
        <li>
          <label>
            Listings
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
        <li>
          <label>
            Offers
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
        <li>
          <label>
            Collection offers
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
        <li>
          <label>
            Transfers
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
      </ul>
    </>
  );
}

export function Collections() {
  return (
    <>
      <ul className="inAmSdrop">
        <div className="dropDfilterInpBox">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Filter" />
        </div>
        <div className="sBDropCont">
          {assetsData.map((assetsDatas) => {
            return (
              <li>
                <label>
                  <div className="colCheckList">
                    <div className="cClL">
                      <div className="cClLImg">
                        <img src={assetsDatas.sImg} alt="" />
                      </div>

                      <div className="cClLn_i">
                        <p className="cClLname">{assetsDatas.collectionName}</p>
                        <VerifiedIcon className="verifyIcon" />
                      </div>
                    </div>
                    <div className="cClR">{assetsDatas.totalAssets}</div>
                  </div>
                  <span className="checkB">
                    <input type="checkbox" className="checkInput" />
                    <DoneIcon className="doneIcon" />
                  </span>
                </label>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
}

export function Chains() {
  return (
    <>
      <ul className="inAmSdrop chains">
        {chainDetails.map((chainDetail) => {
          return (
            <li>
              <label>
                <div className="cClL">
                  <div className="cClLImg">
                    <img src={chainDetail.chainImg} alt="" />
                  </div>
                  <p className="cClLname">{chainDetail.chainName}</p>
                </div>
                <span className="checkB">
                  <input type="checkbox" className="checkInput" />
                  <DoneIcon className="doneIcon" />
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
