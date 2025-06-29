import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import TiltWrapper from "../constants/TiltWrapper";

const Card = ({ index, title, icon, animate = true }) => {
  const CardContent = animate ? motion.div : "div";

  return (
    <TiltWrapper
      className="w-full xs:w-[250px] sm:w-[220px] md:w-[240px] lg:w-[250px]"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <CardContent
        variants={animate ? fadeIn("right", "spring", index * 0.5, 0.75) : undefined}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[280px] flex justify-evenly items-center flex-col text-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] md:text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </CardContent>
    </TiltWrapper>
  );
};

export default Card;
