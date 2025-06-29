import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import mobileImage from "../assets/your-image.png"; // Replace with your path

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen lg:h-screen mx-auto">
      <div
        className={`lg:absolute inset-0 top-[100px] pt-[80px] lg:pt-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start gap-8`}
      >
        {/* Line and dot */}
        <div className="flex flex-row lg:flex-col items-center gap-3 mt-2 lg:mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
          <div className="lg:w-1 w-[2px] h-24 sm:h-40 lg:h-80 violet-gradient" />
        </div>

        {/* Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white font-serif`}>
            Hi 🙋‍♂️ <br className="block lg:hidden" /> I'm{" "}
            <span className="text-[#915EFF]">Praful</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 font-serif`}>
            I'm a Front-End Software Engineer 🧑‍💻 <br className="sm:block hidden" />
            I develop interactive user interfaces.
          </p>
        </div>
      </div>

      {/* Desktop view: show ComputersCanvas */}
      
        <ComputersCanvas />
      

      {/* Mobile view: show image instead */}
      <div className="lg:hidden flex justify-center mt-10 px-4">
        <img
          src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg" // Replace with your image path
          alt="mobile-view"
          className="rounded-2xl max-w-xs w-full object-cover"
        />
      </div>

      {/* Scroll indicator (visible on all screens now) */}
      {/* <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
