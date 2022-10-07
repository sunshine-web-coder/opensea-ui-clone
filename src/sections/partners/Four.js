import { Link } from "react-router-dom";
import Accordion from "../../components/accordion/Accordion";

const Four = () => {
  return (
    <div className="pS">
      <div className="tPtitle pSTtitle">
        <h2>FAQs</h2>
        <p>
          For more FAQs visit our partnership page in our 
          <Link to=""> help center</Link>
        </p>
      </div>
      <div className="pSF">
        <Accordion />
      </div>
    </div>
  );
};

export default Four;
