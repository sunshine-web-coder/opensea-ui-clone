import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Status, {
  Category,
  Chains,
  Collections,
  Currency,
  Price,
  Quantity,
} from "../../components/sideCheckBoxBar/SideBarMenu";

const SideBarCheckBox = () => {
  const [sideBarDrop1, setSideBarDrop1] = useState(true);
  const [sideBarDrop2, setSideBarDrop2] = useState(false);
  const [sideBarDrop3, setSideBarDrop3] = useState(false);
  const [sideBarDrop4, setSideBarDrop4] = useState(false);
  const [sideBarDrop5, setSideBarDrop5] = useState(false);
  const [sideBarDrop6, setSideBarDrop6] = useState(false);
  const [sideBarDrop7, setSideBarDrop7] = useState(false);
  return (
    <div className="assetMainSidebar">
      <div className="inAmS">
        <div>
          <li onClick={() => setSideBarDrop1(!sideBarDrop1)}>
            <button>
              <span>Status</span>
              {sideBarDrop1 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </li>
          {sideBarDrop1 && <Status />}
        </div>

        <div>
          <li onClick={() => setSideBarDrop2(!sideBarDrop2)}>
            <button>
              <span>Price</span>
              {sideBarDrop2 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </li>
          {sideBarDrop2 && <Price />}
        </div>

        <div>
          <li onClick={() => setSideBarDrop3(!sideBarDrop3)}>
            <button>
              <span>Quantity</span>
              {sideBarDrop3 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </li>
          {sideBarDrop3 && <Quantity />}
        </div>
        <div>
          <li onClick={() => setSideBarDrop4(!sideBarDrop4)}>
            <button>
              <span>Collections</span>
              {sideBarDrop4 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </li>
          {sideBarDrop4 && <Collections />}
        </div>
        <div>
          <li onClick={() => setSideBarDrop5(!sideBarDrop5)}>
            <button>
              <span>Chains</span>
              {sideBarDrop5 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </li>
          {sideBarDrop5 && <Chains />}
        </div>
        <div>
          <li onClick={() => setSideBarDrop6(!sideBarDrop6)}>
            <button>
              <span>Category</span>
              {sideBarDrop6 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </li>
          {sideBarDrop6 && <Category />}
        </div>
        <div>
          <li onClick={() => setSideBarDrop7(!sideBarDrop7)}>
            <button>
              <span>Currency</span>
              {sideBarDrop7 ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </li>
          {sideBarDrop7 && <Currency />}
        </div>
      </div>
    </div>
  );
};

export default SideBarCheckBox;
