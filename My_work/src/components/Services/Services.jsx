import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
import pro from "../../img/pro.png";

import Humble from "../../img/humble.png";
import pre from "../../img/pre.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>services</span>
        <spane>
          <br />
          Urban Fit  offers a full range of group  fitness activities <br/> like HIIT, Zumba, Kickboxing suitable 
           for all levels of fitness lovers. <br/>  We also provide personal training <br/> sessions at the studio at your convenience.<br/>
        </spane>
        <a href='#' download>
          <button className="button s-button">More</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Personal Dietician"}
            detail={"Unlock the power of eating healty"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          
        >
          <Card
            // emoji={Glasses}
            emoji={pro}
            heading={"Protain Suppliments"}
            detail={"Buy 100% Authentic Protein & suppliments."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={pre}
            heading={"Personal Trainer"}
            detail={
              "Get the best Trainer from years of experiene"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
