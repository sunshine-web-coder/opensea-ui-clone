import Banner from "../../components/banner/Banner";
import Second from "../../sections/homesections/second/Second";
import Third from "../../sections/homesections/third/Third";
import Four from "../../sections/homesections/four/Four";
import Five from "../../sections/homesections/five/Five";
import Six from "../../sections/homesections/six/Six";
import Seven from "../../sections/homesections/seven/Seven";
import Eight from "../../sections/homesections/eight/Eight";
import Nine from "../../sections/homesections/nine/Nine";
import Ten from "../../sections/homesections/ten/Ten";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Second />
      <Third />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
    </div>
  );
};

export default Home;
