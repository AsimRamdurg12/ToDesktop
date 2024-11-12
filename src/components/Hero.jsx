import { faHand } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tabs } from "../assets";
import Slider from "./Slider";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-32 flex flex-col">
        <div className="border-yellow-300 border cursor-pointer flex lg:self-center my-6 gap-2 items-center px-3 group py-1 rounded-lg bg-yellow-50 w-fit shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
          <div className="w-2 h-2 bg-yellow-400 border-yellow-600 border rounded-full"></div>
          <p className="text-yellow-400 font-display font-semibold">
            V0.21.1:{" "}
            <span className="text-amber-800">Find-in-page bug fixes</span>
          </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-yellow-600 group-hover:translate-x-1 transition duration-300"
          />
        </div>

        <div className="sm:flex items-center hidden justify-center gap-5 text-slate-500">
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faFileCode} />
            <p>Code optional</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHand} />
            <p>Drag & drop builder</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tabs} alt="system" />
            <p>windows, mac and linux</p>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl sm:text-center leading-snug font-display mt-4 font-medium">
          Web app to Desktop app in minutes
        </h1>
        <p className="text-xl max-w-2xl mt-6 font-display sm:text-2xl leading-normal sm:text-center">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality
        </p>
        <div className="flex flex-col sm:flex-row mt-12 gap-5 sm:justify-center">
          <button className="w-fullborder px-8 py-3 shadow-sm rounded-lg leading-7 font-display font-bold text-lg hover:bg-blue-600 hover:ring-1 text-white sm:w-fit bg-primary">
            Download Now
          </button>
          <button className="w-full px-8 py-3 shadow-sm rounded-lg leading-7 bg-white font-display font-bold text-lg ring-gray-300 ring-1 hover:ring-gray-500 sm:w-fit">
            Read Docs
          </button>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default Hero;
