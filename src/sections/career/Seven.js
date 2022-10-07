import img1 from "../../assets/careers/svgIcons/icon-family.svg";
import { ourPeeksData } from "./data/career";

const Seven = () => {
  return (
    <div className="seven">
      <h2>Our Perks</h2>
      <p>
        Employees are our number-one priority, so we like to take care of them!
      </p>
      <div className="grid">
        {ourPeeksData.map((ourPeekData, id) => {
          return (
            <div key={id}>
              {ourPeekData.svg}
              <p>{ourPeekData.title}</p>
              <p>
              {ourPeekData.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seven;
