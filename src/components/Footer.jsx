import { github,linkedin } from "../assets";
import TiltWrapper from "../constants/TiltWrapper";
function Footer() {
  return (
    <footer className="bg-primary flex flex-col md:flex-row items-center justify-center md:justify-around py-6 gap-4 flex-wrap shadow-lg shadow-white">
      <div>
        {" "}
        <p className="text-sm text-white">
          Email:{" "}
          <a
            href="mailto:ayushagarwal8126@gmail.com"
            className="underline text-secondary hover:text-white cursor-pointer"
          >
            prafulgahlot0896@gmail.com
          </a>
        </p>
        <p className="text-sm text-white">
          Phone:{" "}
          <a
            href="tel:+918126749140"
            className="underline text-secondary cursor-pointer hover:text-white"
          >
            +91 8979012764
          </a>
        </p>
      </div>
      <div className="flex gap-4">
        <TiltWrapper
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          {" "}
          <a
            href="https://github.com/Praful-bit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="w-10 h-10" />
          </a>
        </TiltWrapper>
        <TiltWrapper
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          <a
            href="https://www.linkedin.com/in/praful-gahlot-9a6329268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="w-10 h-10" />
          </a>
        </TiltWrapper>
        <TiltWrapper
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
        </TiltWrapper>
      </div>
      <p className="text-sm text-secondary">
        &copy; 2025 Praful Gahlot. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;