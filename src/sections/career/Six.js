import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import { settingsTwo } from "../../slickSliderSettings";
import { careerImgSlideTwo } from "./data/career";

const Six = () => {
  return (
    <div className="second">
      <div className="inSecond">
        <Slider {...settingsTwo}>
          {careerImgSlideTwo.map((careersImgSlide, id) => {
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

export default Six;
