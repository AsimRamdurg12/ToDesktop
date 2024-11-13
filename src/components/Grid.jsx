import React from "react";
import {
  apis,
  customize,
  installers,
  notifications,
  plugins,
  updates,
} from "../assets";

const Grid = () => {
  return (
    <section className="container">
      <h2 className="text-5xl max-w-2xl leading-normal sm:font-semibold mb-14">
        ToDesktop handles the details
      </h2>
      <div
        className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
        style={{ gridAutoRows: "96px" }}
      >
        <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-gray-200 gradient-hover-outer">
          <div className="bg-gray-100 gap-6 gradient-hover-inner flex flex-col justify-around items-center rounded-2xl w-full h-full p-6">
            <h3 className="text-2xl font-medium font-display">
              Native Notifications
            </h3>
            <img src={notifications} alt="notifications" />
          </div>
        </div>
        <div className="row-start-1 row-end-4 group rounded-2xl p-[1px] bg-gray-200 bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-100 gap-6 bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col justify-around items-center rounded-2xl w-full h-full p-6">
            <h3 className="text-2xl font-medium font-display">Auto Updates</h3>
            <p className="text-xl text-center font-display">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src={updates} alt="updates" />
          </div>
        </div>

        <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-gray-200 bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-100 gap-6 bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col justify-around items-center rounded-2xl w-full h-full p-6">
            <h3 className="text-2xl font-medium font-display">Plugins</h3>
            <img src={plugins} alt="plugins" />
          </div>
        </div>

        <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-gray-200 bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-100 gap-6 bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col justify-around items-center rounded-2xl w-full h-full p-6">
            <h3 className="text-2xl font-medium font-display">
              Access to Native APIs
            </h3>
            <p className="text-xl text-center font-display">
              ToDesktop ensures the underlying browser, performance
              improvements, security patches and additional features are always
              up to date.
            </p>
            <img src={apis} alt="apis" />
          </div>
        </div>

        <div className="row-start-4 row-end-6 group rounded-2xl p-[1px] bg-gray-200 bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-100 gap-6 bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col justify-around items-center rounded-2xl w-full h-full p-6">
            <h3 className="text-2xl font-medium font-display">
              Customizable look and feel
            </h3>
            <img src={customize} alt="customize" />
          </div>
        </div>

        <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-gray-200 bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-100 gap-6 bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col justify-around items-center rounded-2xl w-full h-full p-6">
            <h3 className="text-2xl font-medium font-display">
              Native Installers
            </h3>
            <p className="text-xl text-center font-display">
              We even provide a magic link which will detect your users
              operating system & download the most up to date version of your
              app.
            </p>
            <img src={installers} alt="installers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
