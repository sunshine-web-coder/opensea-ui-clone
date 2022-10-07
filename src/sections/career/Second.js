import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import { settingsTwo } from "../../slickSliderSettings";
import { careerImgSlide } from "./data/career";

const Second = () => {
  return (
    <div className="second">
      <div className="inSecond">
        <Slider {...settingsTwo}>
          {careerImgSlide.map((careersImgSlide, id) => {
            return (
              <div key={id} className="slideBox">
                <div className="inSlideBox">{careersImgSlide.img}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Second;
