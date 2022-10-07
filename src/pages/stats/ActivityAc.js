import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import { Activity } from "../../allData/activity";

const ActivityAc = () => {
  return (
    <div className="rankingRe">
      <div className="ddaRC_Items">
        <div className="aRC_Items-header">
          <div className="empty"></div>
          <div className="rrCol aCti">Items</div>
          <div className="rrBtnBox price">Price</div>
          <div className="rrBtnBox quantity">Quantity</div>
          <div className="rrBtnBox from">From</div>
          <div className="rrBtnBox to">To</div>
          <div className="rrBtnBox time">Time</div>
        </div>
      </div>
      <div className="rRe_roleList">
        {Activity.map((activities) => {
          return (
            <Link to="">
              <div className="ddaRC_Items">
                <div className="aRC_Items">
                  <div className="iType">
                    {activities.saleIcon}
                    {activities.listIcon}
                    {activities.offersIcon}
                    {activities.collectionOffersIcon}
                    {activities.transferIcon}
                    <h6>{activities.eventType}</h6>
                  </div>
                  <div className="rrCol aCti">
                    <div className="aCtiImgVerifyB">
                      <div className="aCtiImg">
                        <img src={activities.avatar} alt="" />
                      </div>
                    </div>
                    <div className="aCtiDetails">
                      <div className="colName">
                        <p>{activities.colName}</p>
                        {activities.vrifyIcon}
                      </div>
                      <div className="itemNumber">#{activities.itemNumber}</div>
                    </div>
                  </div>
                  <div className="rrBtnBox price">
                    <div className="mainPrice">
                      <img src={activities.ethIcon} alt="" />
                      <img src={activities.solIcon} alt="" />
                      {activities.price}
                    </div>
                    <div className="priceConvert">
                      ${activities.priceConvert}
                    </div>
                  </div>
                  <div className="rrBtnBox quantity">
                    <p>{activities.quantity}</p>
                  </div>
                  <div className="rrBtnBox from">
                    <Link to="/from">
                      <p>{activities.from}</p>
                    </Link>
                  </div>
                  <div className="rrBtnBox to">
                    <Link to="/to">
                      <p>{activities.to}</p>
                    </Link>
                  </div>
                  <div className="rrBtnBox time">
                    <Link to="/time">
                      {activities.time} Seconds ago
                      {activities.timeIcon}
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityAc;
