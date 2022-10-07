import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./accordion.css";
import { useState } from "react";

const Accordion = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div className="accordionContainer">
      <div className="accordion">
        <div className="question" onClick={() => setOpen1(!open1)}>
          <span>What is an NFT? What makes them so great?</span>
          {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open1 && (
          <div className="answer">
            <p>
              An NFT is a digital asset stored on the blockchain. These assets
              hold information, like descriptions, properties, and media files.
              NFTs are unique, one-of-a-kind, and non-interchangeable.
            </p>
            <p>
              The history of every NFT is recorded on the blockchain, meaning
              buyers can prove their ownership and creators can receive creator
              earnings every time their work is re-sold. NFTs can be traded on
              marketplaces, proudly displayed in online galleries or used to
              access exclusive content and real-life experiences.
            </p>
          </div>
        )}

        <div className="question" onClick={() => setOpen2(!open2)}>
          <span>What makes OpenSea special?</span>
          {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open2 && (
          <div className="answer">
            <p>
              Users can create NFTs for free at anytime across multiple
              blockchains. Our Polygon integration allows users to create, buy
              and sell NFTs without paying any transaction fee, creating a
              <Link to="/#"> gas-free marketplace.</Link> We offer the most
              users and have the most projects of any NFT platform.
            </p>
            <p>
              Sellers can benefit from creator earnings of up to 10% on OpenSea.
              Combined with our secondary market dominance, content curation,
              and sorting features, your NFTs will be primed for success long
              after the initial sale.
            </p>
          </div>
        )}
        <div className="question" onClick={() => setOpen3(!open3)}>
          <span>What does a partnership with OpenSea entail?</span>
          {open3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open3 && (
          <div className="answer">
            <p>
              OpenSea partners can enjoy guidance from our industry leading
              experts on NFT development, sale structure, and promotion.
            </p>
            <p>
              Once you’ve finalized your content, we will advise on pricing
              based on previous sales and current market trends. Our dedicated
              team will make sure you feel comfortable using the platform and
              advise on best practices.
            </p>
          </div>
        )}
        <div className="question" onClick={() => setOpen4(!open4)}>
          <span>What does it cost to partner with OpenSea</span>
          {open4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open4 && (
          <div className="answer">
            <p>
              OpenSea doesn't charge for partnerships or promotion. We only take
              our usual 2.5% on every OpenSea transaction both primary and
              secondary sales - the lowest in the industry.
            </p>
            <p>
              Our free API serves 1 billion requests per week, powering NFTs
              displayed on mobile wallets, games, art platforms, & even other
              marketplaces.
            </p>
          </div>
        )}
        <div className="question" onClick={() => setOpen5(!open5)}>
          <span>How do we get started?</span>
          {open5 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open5 && (
          <div className="answer">
            <p>
              Currently, we’re most interested in promoting projects that have
              multi-tiered sales (i.e. 1-of-1s, 1-of-manys, etc), have
              interesting & unique artwork, include robust digital unlockable
              content experiences, and have already been marketed in
              well-trafficked channels. If you fit this description, please fill
              in our partnership request form <Link to="/#">here</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
