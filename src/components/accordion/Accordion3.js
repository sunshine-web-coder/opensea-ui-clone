import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./accordion.css";
import { useState } from "react";

const AccordionThree = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="">
      <div className="accordion">
        <div className="question" onClick={() => setOpen1(!open1)}>
          <span>Cultivate continuous growth</span>
          {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open1 && (
          <div className="answer">
            <p>
              We’re always striving to develop, improve, and grow as a company,
              as a team, and as individuals. We’re constantly iterating, fixing,
              building, and learning to polish and refine all of our edges.
            </p>
          </div>
        )}

        <div className="question" onClick={() => setOpen2(!open2)}>
          <span>Prioritize genuine empathy</span>
          {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open2 && (
          <div className="answer">
            <p>
              As we are navigating a nascent market, the one thing that really
              helps us find solid footing is putting our users' needs first. By
              focusing on the user and listening to their feedback, suggestions
              and frustrations, we’ll build a platform that solves real problems
              for users.
            </p>
          </div>
        )}
        <div className="question" onClick={() => setOpen3(!open3)}>
          <span>Embrace openness</span>
          {open3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open3 && (
          <div className="answer">
            <p>
              We pride ourselves in our openness and transparency, both
              internally and externally. Internally, we believe everyone should
              have the data, tools, and platform to make an argument that goes
              against the grain. Externally, we're strong evangelists of open
              protocols. Our platform is accessible to anyone building
              user-owned digital items, and we build on well-adopted open
              standards.
            </p>
          </div>
        )}
        <div className="question" onClick={() => setOpen4(!open4)}>
          <span>Foster inclusive collaboration</span>
          {open4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open4 && (
          <div className="answer">
            <p>
              At OpenSea, we know we are stronger together. When we come
              together and bring our different perspectives, skills, and
              mindset, it sparks magic. Both internally and externally, we value
              inclusivity and collaboration. We know we can build something
              phenomenal when we come together as a united team.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionThree;
