import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SecurityIcon from '@mui/icons-material/Security';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChatIcon from '@mui/icons-material/Chat';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";

const Third = () => {
  return (
    <div className="third">
      <h1>What Teams Will Get</h1>
      <div className="inThird">
        <div className="inThirdBox">
          <div className="thirdBoxContent">
            <div className="iconBox">
              <PeopleIcon className="icon" />
            </div>
            <span>Direct access to OpenSea leadership.</span>
          </div>
          <div className="thirdBoxContent">
            <div className="iconBox">
              <BusinessCenterIcon className="icon" />
            </div>
            <span>Access to OpenSea's strategic and venture partners.</span>
          </div>
          <div className="thirdBoxContent">
            <div className="iconBox">
              <SecurityIcon className="icon" />
            </div>
            <span>Assistance with NFT security and improving NFT standards.</span>
          </div>
        </div>
        <div className="inThirdBox">
          <div className="thirdBoxContent">
            <div className="iconBox">
              <MenuBookIcon className="icon" />
            </div>
            <span>Integration with docs.opensea.io where appropriate.</span>
          </div>
          <div className="thirdBoxContent">
            <div className="iconBox">
              <ChatIcon className="icon" />
            </div>
            <span>Guest blog posts on opensea.io/blog where appropriate.</span>
          </div>
          <div className="thirdBoxContent">
            <div className="iconBox">
              <LanguageIcon className="icon" />
            </div>
            <span>Connections with leading NFT creators and OpenSea Ecosystem Grant recipients.</span>
          </div>
        </div>
      </div>
      <div className="third_btn">
        <Link className="site_btn" to="#">Learn more</Link>
      </div>
    </div>
  );
};

export default Third;
