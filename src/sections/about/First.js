import React from "react";
import { Link } from "react-router-dom";
import abImg from "../../assets/about/All-NFT-Categories-Illustration.svg";
import abIcon1 from "../../assets/about/icon/icon-timeline.svg";
import abIcon2 from "../../assets/about/icon/icon-employees.svg";
import abIcon3 from "../../assets/about/icon/icon-collections.svg";
import abIcon4 from "../../assets/about/icon/nfts.svg";
import abIcon5 from "../../assets/about/icon/icon-money.svg";

const First = () => {
  return (
    <div className="abTy">
      <div className="inabTy">
        <div className="left">
          <h1>Building an open digital economy</h1>
          <p className="inaP">
            At OpenSea, we're excited about a brand new type of digital good
            called a non-fungible token, or <Link to="/#">NFT</Link>. NFTs have
            exciting new properties: they’re unique, provably scarce, tradeable,
            and usable across multiple applications. Just like physical goods,
            you can do whatever you want with them! You could throw them in the
            trash, gift them to a friend across the world, or go sell them on an
            open marketplace. But unlike physical goods, they're armed with all
            the programmability of digital goods.
          </p>
          <p>
            A core part of our vision is that open protocols like Ethereum and
            interoperable standards like <Link to="/#">ERC-721</Link> and
            <Link to="/#"> ERC-1155</Link> will enable vibrant new economies.
            We're building tools that allow consumers to trade their items
            freely, creators to launch new digital works, and developers to
            build rich, integrated marketplaces for their digital items.
          </p>
          <p>We’re proud to be the first and largest marketplace for NFTs.</p>
        </div>
        <div className="right">
          <div className="riGN">
            <img src={abImg} alt="" />
          </div>
        </div>
      </div>
      <div className="inBm">
        <div>
          <img src={abIcon1} alt="" />
          <p>2017</p>
          <p>Founded</p>
        </div>
        <div>
          <img src={abIcon2} alt="" />
          <p>200+</p>
          <p>Employees</p>
        </div>
        <div>
          <img src={abIcon3} alt="" />
          <p>2M+</p>
          <p>Collections</p>
        </div>
        <div>
          <img src={abIcon4} alt="" />
          <p>80M+</p>
          <p>NFTs</p>
        </div>
        <div>
          <img src={abIcon5} alt="" />
          <p>$20B+</p>
          <p>Volume</p>
        </div>
      </div>
    </div>
  );
};

export default First;
