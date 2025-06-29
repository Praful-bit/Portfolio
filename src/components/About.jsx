import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, intro } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Card from "./Card";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center lg:text-left">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto lg:mx-0 leading-[30px] text-center lg:text-left"
      >
        {intro}
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
