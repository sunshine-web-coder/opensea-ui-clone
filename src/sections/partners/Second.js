import { PsTSection } from "./data/partners";

const Second = () => {
  return (
    <div className="tPartner pS">
      <div className="tPtitle pSTtitle">
        <h2>Why partner with OpenSea</h2>
        <p>
          While we take pride in being the first and largest marketplace and in
          our robust feature set, we also help our partners succeed with the
          following...
        </p>
      </div>
      <div className="pSContent">
        {PsTSection.map((PsTSectionx) => {
          return (
            <div>
              {PsTSectionx.svg}
              <h3>{PsTSectionx.h3}</h3>
              <p>{PsTSectionx.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Second;
