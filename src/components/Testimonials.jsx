import React from "react";
import {
  Basedash,
  ClickUpLogo,
  LifeAt,
  Max,
  Pouya,
  Rick,
  Rise,
  screenshot,
  StoryClickUp,
  zeb,
} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons/faWandMagicSparkles";

const Testimonials = () => {
  return (
    <section className="container">
      <h2 className="text-5xl font-semibold mb-24">Customer stories</h2>
      <div className="rounded-xl border flex flex-col lg:flex-row items-end mt-6">
        <div className="flex flex-col gap-12 p-8">
          <img src={ClickUpLogo} alt="ClickUp" className="h-10 w-fit" />
          <h3 className="font-display text-2xl font-medium leading-relaxed">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months.
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
              <FontAwesomeIcon icon={faCheck} />
              <p className="font-semibold text-yellow-700">Chromeless UI</p>
            </div>

            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
              <FontAwesomeIcon icon={faCheck} />
              <p className="font-semibold text-yellow-700">Native spellcheck</p>
            </div>

            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
              <FontAwesomeIcon icon={faCheck} />
              <p className="font-semibold text-yellow-700">
                Task time in menubar
              </p>
            </div>

            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
              <FontAwesomeIcon icon={faCheck} />
              <p className="font-semibold text-yellow-700">
                Notification count in the dock
              </p>
            </div>

            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
              <FontAwesomeIcon icon={faCheck} />
              <p className="font-semibold text-yellow-700">
                Global hotkey to create task
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-500">
            “ToDesktop provided us with a{" "}
            <span className="text-black">polished desktop app</span> in no time.
            Their expert team guided us through a smooth migration from our
            outdated legacy desktop app, enabling us to deliver{" "}
            <span className="text-black">new and improved features</span> to our
            customers within days.”
          </p>

          <div className="flex gap-4">
            <img src={zeb} alt="" className="rounded-full" />
            <div>
              <h3 className="font-semibold font-display text-lg">Zeb Evans</h3>
              <p className="text-gray-500">
                Founder & CEO,{" "}
                <a href="" className="anchor-hover">
                  ClickUp
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <img
            src={StoryClickUp}
            alt=""
            className="w-[80%] h-[80%] rounded-br-xl"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
        <div className="group rounded-2xl gradient-hover-outer">
          <div className="rounded-2xl gradient-hover-inner flex flex-col p-6 gap-6">
            <div className="flex items-center gap-4 ">
              <div className="flex justify-center items-center rounded-full bg-blue-200 w-12 h-12">
                <FontAwesomeIcon icon={faCode} className="text-indigo-800" />
              </div>
              <h3 className="font-semibold text-2xl font-display">
                Native APIs
              </h3>
            </div>
            <p className="text-lg font-light">
              “What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience. ”
            </p>
            <div className="flex">
              <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                <img src={Rise} alt="Rise" className="min-w-16 min-h-16" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                <img src={Rick} alt="Rick" />
              </div>
              <div className="flex flex-col ml-4">
                <h3 className="font-display font-semibold text-lg">
                  Rick Pastoor
                </h3>
                <a href="" className="anchor-hover w-fit text-gray-500">
                  Rise
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="group rounded-2xl gradient-hover-outer">
          <div className="rounded-2xl gradient-hover-inner flex flex-col p-6 gap-6">
            <div className="flex items-center gap-4 ">
              <div className="flex justify-center items-center rounded-full bg-red-200 w-12 h-12">
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className="text-gray-500"
                />
              </div>
              <h3 className="font-semibold text-2xl font-display">
                Cleaner, less cluttered UI
              </h3>
            </div>
            <p className="text-lg font-light">
              “ Having a desktop app gives us the freedom to design the
              experience we want, including better keyboard shortcuts and a
              cleaner UI. It was a no-brainer for us to use ToDesktop. ”
            </p>
            <div className="flex">
              <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                <img src={Basedash} alt="Rise" className="min-w-16 min-h-16" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                <img src={Max} alt="Rick" />
              </div>
              <div className="flex flex-col ml-4">
                <h3 className="font-display font-semibold text-lg">
                  Max Musing
                </h3>
                <a href="" className="anchor-hover w-fit text-gray-500">
                  Basedash
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="group rounded-2xl gradient-hover-outer">
          <div className="rounded-2xl gradient-hover-inner flex flex-col p-6 gap-6">
            <div className="flex items-center gap-4 ">
              <div className="flex justify-center items-center rounded-full bg-blue-200 w-12 h-12">
                <FontAwesomeIcon icon={faCode} className="text-indigo-800" />
              </div>
              <h3 className="font-semibold text-2xl font-display">
                Code Optional
              </h3>
            </div>
            <p className="text-lg font-light">
              “ It was unbelievably simple for us to get a desktop app up and
              running, and we didn’t have to write a single line of code. Once
              we had this MVP, we were able to extend the app’s functionality
              with custom behavior using ToDesktop’s libraries. ”
            </p>
            <div className="flex">
              <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                <img src={LifeAt} alt="Rise" className="min-w-16 min-h-16" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                <img src={Pouya} alt="Rick" />
              </div>
              <div className="flex flex-col ml-4">
                <h3 className="font-display font-semibold text-lg">
                  Pouya Rad
                </h3>
                <a href="" className="anchor-hover w-fit text-gray-500">
                  LifeAt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border flex flex-col bg-black lg:flex-row mt-6 pt-6 lg:pt-10">
        <div className="flex flex-col gap-4 lg:pb-4 pb-2 px-8 lg:flex-1">
          <span className="text-gray-300 font-semibold font-display">
            READY TO START BUILDING?
          </span>
          <h2 className="font-display text-white text-4xl lg:text-5xl font-medium">
            Create your desktop app for free*
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl">
            ToDesktop Builder will take you step-by-step through the process of
            creating your first desktop app in just a few minutes.
          </p>

          <button className="bg-primary rounded-lg py-3 hover:opacity-90 flex justify-center items-center gap-4">
            <FontAwesomeIcon icon={faDownload} className="text-white" />
            <span className="text-white text-2xl font-semibold font-display">
              Download ToDesktop Builder
            </span>
          </button>

          <p className="text-gray-300 text-xs font-display italic">
            *You can create a desktop app and run it on your computer for free.
            You will only be charged if you want to create a distributable app
            for your customers.
          </p>
        </div>

        <div className="pt-5 lg:pt-0 lg:w-1/2">
          <img src={screenshot} alt="" className="pl-12 h-full" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
