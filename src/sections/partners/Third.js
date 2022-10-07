import { Link } from "react-router-dom";
import { Partners } from "./data/partners";

const Third = () => {
  return (
    <div className="pS">
      <div className="tPtitle pSTtitle">
        <h2>Who has partnered with us</h2>
        <p>
          We’ve collaborated with high-profile organizations and celebrities and
          generated millions of dollars in revenue in the process.
        </p>
      </div>
      <div className="psTh">
        {Partners.map((Partner) => {
          return (
            <Link to="/">
              <div className="psThBox">
                <div className="inPsThBox">
                  <div className="pScoverImg">
                    <img src="https://i.im.ge/2022/07/09/upoen6.jpg" alt="" />
                  </div>
                  <div className="colPsFooter">
                    <div className="colPsavatarImg">
                      <img src="https://i.im.ge/2022/07/09/upXQqF.jpg" alt="" />
                    </div>
                    <div className="colName_verify_icon">
                      <div className="colPsName">
                        jdjddsdsdhhhhhhhhhhhhhhhhhhhhhhhhhs
                      </div>
                      <div className="vrify-iconB">{Partner.vrifyIcon}</div>
                    </div>
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

export default Third;
