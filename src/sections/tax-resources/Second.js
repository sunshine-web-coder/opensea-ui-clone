import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className="inTrT">
      <div className="taxHhns inTrTs">
        <h1>What OpenSea users get</h1>
        <div className="grid">
          <div className="gridNM">
            <div className="gridNmicon">
              <ShoppingCartOutlinedIcon className="gridNmiconIc" />
            </div>
            <div className="gridNmTxt">
              <h4>Free for up to 50 transactions</h4>
              <p>Join CoinTracker to get free tax reports for up to 50 transactions your first year.</p>
            </div>
          </div>
          <div className="gridNM">
            <div className="gridNmicon">
              <ThumbUpOffAltOutlinedIcon className="gridNmiconIc" />
            </div>
            <div className="gridNmTxt">
              <h4>Discounted for power users</h4>
              <p>Get 10% off all CoinTracker premium services.</p>
            </div>
          </div>
          <div className="gridNM">
            <div className="gridNmicon">
              <AccountBalanceWalletOutlinedIcon className="gridNmiconIc" />
            </div>
            <div className="gridNmTxt">
              <h4>Simple and seamless filing</h4>
              <p>With flexible filing options, CoinTracker makes managing your NFT taxes easy.</p>
            </div>
          </div>
          <div className="gridNM">
            <div className="gridNmicon">
              <LockOutlinedIcon className="gridNmiconIc" />
            </div>
            <div className="gridNmTxt">
              <h4>Trusted and secure platform</h4>
              <p>CoinTracker has over 500,000 users and tracks over $20 billion in crypto assets.</p>
            </div>
          </div>
        </div>
        <Link className="site_btn" to="">Get Started</Link>
      </div>
    </div>
  );
};

export default Second;
