import React, { useEffect, useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { TopNfts } from "../../allData/catData";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import { TitleRadioButton } from "../../components/radioButton/TitleRadioButton";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";

const RankingRe = () => {
  const [dataPage] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [radioButtonActive, setRadioButtonActive] = useState("activeBtn1");
  const [toggleIcon1, setToggleIcon1] = useState(false);
  const [toggleIcon2, setToggleIcon2] = useState(false);
  const [toggleIcon3, setToggleIcon3] = useState(false);
  const [toggleIcon4, setToggleIcon4] = useState(false);
  const [toggleStarIcon, setToggleStarIcon] = useState(false);

  const radioChangeHandlerOne = (e) => {
    setRadioButtonActive(e.target.value);
  };

  useEffect(() => {
    setPage(0);
  }, [dataPage]);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="rankingRe">
      <div className="rreHeader">
        <div className="rrCol">
          <p>Collection</p>
        </div>

        <div className="rreHeaderRight">
          <div
            className="title_btn_box"
            onClick={() => {
              setToggleIcon1(!toggleIcon1);
              setToggleIcon2(false);
              setToggleIcon3(false);
              setToggleIcon4(false);
            }}
          >
            <TitleRadioButton
              changed={radioChangeHandlerOne}
              id="1"
              isSelected={radioButtonActive === "activeBtn1"}
              label="VOLUME"
              value="activeBtn1"
            />
            <div className="title_btn_box_arrow volume">
              {toggleIcon1 ? (
                <KeyboardArrowUpOutlinedIcon className="titleAssetArrow" />
              ) : (
                <KeyboardArrowDownOutlinedIcon className="titleAssetArrow" />
              )}
            </div>
          </div>

          <div
            className="title_btn_box"
            onClick={() => {
              setToggleIcon2(!toggleIcon2);
              setToggleIcon1(false);
              setToggleIcon3(false);
              setToggleIcon4(false);
            }}
          >
            <TitleRadioButton
              changed={radioChangeHandlerOne}
              id="2"
              isSelected={radioButtonActive === "activeBtn2"}
              label="% CHANGE"
              value="activeBtn2"
            />
            <div className="title_btn_box_arrow change">
              {toggleIcon2 ? (
                <KeyboardArrowUpOutlinedIcon className="titleAssetArrow" />
              ) : (
                <KeyboardArrowDownOutlinedIcon className="titleAssetArrow" />
              )}
            </div>
          </div>

          <div
            className="title_btn_box"
            onClick={() => {
              setToggleIcon3(!toggleIcon3);
              setToggleIcon1(false);
              setToggleIcon2(false);
              setToggleIcon4(false);
            }}
          >
            <TitleRadioButton
              changed={radioChangeHandlerOne}
              id="3"
              isSelected={radioButtonActive === "activeBtn3"}
              label="FLOOR PRICE"
              value="activeBtn3"
            />
            <div className="title_btn_box_arrow FloorPrice">
              {toggleIcon3 ? (
                <KeyboardArrowUpOutlinedIcon className="titleAssetArrow" />
              ) : (
                <KeyboardArrowDownOutlinedIcon className="titleAssetArrow" />
              )}
            </div>
          </div>

          <div
            className="title_btn_box"
            onClick={() => {
              setToggleIcon4(!toggleIcon4);
              setToggleIcon1(false);
              setToggleIcon2(false);
              setToggleIcon3(false);
            }}
          >
            <TitleRadioButton
              changed={radioChangeHandlerOne}
              id="4"
              isSelected={radioButtonActive === "activeBtn4"}
              label="SALES"
              value="activeBtn4"
            />
            <div className="title_btn_box_arrow sale">
              {toggleIcon4 ? (
                <KeyboardArrowUpOutlinedIcon className="titleAssetArrow" />
              ) : (
                <KeyboardArrowDownOutlinedIcon className="titleAssetArrow" />
              )}
            </div>
          </div>
          <span className="volumeTxt">VOLUME</span>
        </div>
      </div>
      <div className="rRe_roleList">
        {TopNfts.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ).map((TopNft) => {
          return (
            <div className="nHmRan">
              <Link to="/">
                <div key={TopNft.id} className="rRe_roleItems">
                  <div className="rrCol">
                    <div className="rrCno">{TopNft.id}</div>
                    <div className="rrCiV">
                      <div className="rrCImg">
                        <img src={TopNft.avatar} alt="" />
                      </div>
                      {TopNft.vrifyIcon}
                    </div>
                    <div className="rrCname RRvcolName">{TopNft.colName}</div>
                    <span className="RRfloorPriMo">
                      Floor price:{" "}
                      <strong>
                        {TopNft.floorPrice} {TopNft.chainName}
                      </strong>
                    </span>
                  </div>
                  <div className="topNftRankingRight">
                    <div className="rrBtnBox">
                      {/* <img src={TopNft.ethIcon} className="chainLogo" alt="" /> */}
                      <div className="hfhf">
                        <span>
                          {TopNft.volume} {TopNft.chainName}
                        </span>
                        <span>{TopNft.hour}</span>
                      </div>
                    </div>
                    <div className="rrBtnBox perc">{TopNft.hour}</div>
                    <div className="rrBtnBox">
                      {TopNft.floorPrice} {TopNft.chainName}
                    </div>
                    <div className="rrBtnBox">{TopNft.sale}</div>
                  </div>
                </div>
              </Link>
              <div
                className="rrBtnBoxStarIcon"
                onClick={() => setToggleStarIcon(!toggleStarIcon)}
              >
                {toggleStarIcon ? (
                  <div className="rrBtnBox">{TopNft.watchListFillIcon}</div>
                ) : (
                  <div className="rrBtnBox">{TopNft.watchListIcon}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <TablePagination
        count={TopNfts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default RankingRe;
