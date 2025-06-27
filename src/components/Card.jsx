import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import TiltWrapper from "../constants/TiltWrapper"; // adjust path if needed

const Card = ({ index, title, icon, animate = true }) => {
  const CardContent = animate ? motion.div : motion.div; // keep consistent

  return (
    <TiltWrapper
      className="xs:w-[250px] w-full"
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
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </CardContent>
    </TiltWrapper>
  );
};

export default Card;
