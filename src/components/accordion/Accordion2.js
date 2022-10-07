import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./accordion.css";
import { useState } from "react";

const AccordionTwo = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="accordionContainer">
      <div className="accordion">
        <div className="question" onClick={() => setOpen1(!open1)}>
          <span>Can OpenSea do my taxes for me?</span>
          {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open1 && (
          <div className="answer">
            <p>
              No. You are responsible for determining what, if any, taxes apply
              to your purchases, sales, and transfers of NFTs. If you have
              specific questions regarding taxes, please consult with a
              professional tax advisor.{" "}
              <Link to="https://www.cointracker.io/opensea?utm_source=opensea">
                Learn more here.
              </Link>
            </p>
          </div>
        )}

        <div className="question" onClick={() => setOpen2(!open2)}>
          <span>What do I owe in taxes?</span>
          {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open2 && (
          <div className="answer">
            <p>
              We understand it can feel challenging to work through your
              purchases, sales, and transfers to determine what taxes may apply.
              Thankfully, there are third-party services who can help. We
              recommend CoinTracker as one such service.
            </p>
          </div>
        )}
        <div className="question" onClick={() => setOpen3(!open3)}>
          <span>How does OpenSea work with CoinTracker?</span>
          {open3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open3 && (
          <div className="answer">
            <p>
              CoinTracker is not an OpenSea product, and OpenSea does not share
              any information with CoinTracker. Items you purchased, sold, or
              transferred using OpenSea’s services will be available in your
              wallet address history. This history is public. CoinTracker will
              review your wallet address history to help you determine what
              taxes you may owe.
            </p>
          </div>
        )}
        <div className="question" onClick={() => setOpen4(!open4)}>
          <span>What exchanges and currencies are supported?</span>
          {open4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open4 && (
          <div className="answer">
            <p>
            Cointracker supports over 300 exchanges and over 8,000 cryptocurrencies.
            <link to="https://www.cointracker.io/exchanges"></link> See a full list of supported exchanges here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionTwo;
