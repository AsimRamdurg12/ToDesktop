import React from "react";
import { arrow, desktopApps1, desktopApps2 } from "../assets";

const Slider = () => {
  return (
    <section className="gap-8 flex flex-col">
      <div className="flex justify-center gap-5">
        <img src={arrow} alt="arrow" className="translate-y-3" />
        <span className="font-medium font-display">
          APPS POWERED BY TODESKTOP
        </span>
        <img src={arrow} alt="arrow" className="translate-y-3 -scale-x-100" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="">
          <div className="flex flex-row gap-2 justify-center">
            {desktopApps1.map((app) => (
              <div className="flex relative flex-col items-center w-28 h-28 lg:w-32 lg:h-32 bg-white border-gray-300 border p-3 rounded-xl gap-2">
                <img
                  src={app.img}
                  alt={app.label}
                  className="h-12 w-12 lg:w-16 lg:h-16 block"
                />
                <p className="font-semibold text-[12px] lg:text-[16px] font-display">
                  {app.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex flex-row gap-2 justify-center">
            {desktopApps2.map((app) => (
              <div className="flex relative flex-col items-center w-28 h-28 lg:w-32 lg:h-32 bg-white border-gray-300 border p-3 rounded-xl gap-2">
                <img
                  src={app.img}
                  alt={app.label}
                  className="h-12 w-12 lg:w-16 lg:h-16 block"
                />
                <p className="font-semibold text-[12px] text-center lg:text-[16px] font-display">
                  {app.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
