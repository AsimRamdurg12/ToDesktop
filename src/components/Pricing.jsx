import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pricing = () => {
  return (
    <section className="container">
      <div>
        <h2 className="text-5xl leading-normal sm:font-semibold max-w-xl">
          Choose a plan that fits your needs
        </h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 mt-6 gap-6">
        <div className="border rounded-xl px-8 pt-12 pb-8 mt-8 flex flex-col gap-6 bg-gray-50">
          <h3 className="text-4xl font-semibold font-display">Free</h3>
          <p className="text-gray-500 flex-wrap">
            For personal use or testing your app before deploying to customers.
          </p>
          <p className="uppercase text-gray-500">Key Features</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
              <span className="text-lg text-gray-700">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
              <span className="text-lg text-gray-700">Run app locally</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faXmark} className="text-gray-500" />
              <span className="text-lg text-gray-700">No Code Signing</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faXmark} className="text-gray-500" />
              <span className="text-lg text-gray-700">
                No Native Installers
              </span>
            </li>
          </ul>
          <button className="border border-gray-300 bg-white rounded-lg py-2 text-xl font-display font-semibold text-primary shadow-sm">
            Get Started
          </button>
        </div>

        <div className="border rounded-xl px-8 pt-12 pb-8 mt-8 flex flex-col gap-6 bg-gray-50">
          <h3 className="text-4xl font-semibold font-display">Essential</h3>
          <p className="text-gray-500">For simple desktop apps.</p>
          <p className="text-2xl font-semibold font-display">
            $100 <span className="text-lg font-light">/month</span>
          </p>
          <p className="uppercase text-gray-500">Key Features</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
              <span className="text-lg text-gray-700">
                Windows, Mac & Linux
              </span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
              <span className="text-lg text-gray-700">Code Signing</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faXmark} className="text-gray-500" />
              <span className="text-lg text-gray-700">Native Installers</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faXmark} className="text-gray-500" />
              <span className="text-lg text-gray-700">Email/chat support</span>
            </li>
          </ul>
          <button className="border border-gray-300 bg-white rounded-lg py-2 text-xl font-display font-semibold text-primary shadow-sm">
            Get Started
          </button>
        </div>

        <div className="border rounded-xl px-8 pt-12 pb-8 mt-8 flex flex-col gap-6 bg-gray-50 relative">
          <p className="px-3 py-2 font-semibold border w-fit rounded-full bg-blue-200 text-primary absolute right-8 -translate-y-16">
            Most popular
          </p>
          <h3 className="text-4xl font-semibold font-display">Professional</h3>
          <p className="text-2xl font-semibold font-display">
            $240 <span className="text-lg font-light">/month</span>
          </p>
          <p className="text-gray-500">For sophisticated desktop apps.</p>
          <p className="uppercase text-gray-500">
            Everything in Essential Plus
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
              <span className="text-lg text-gray-700">
                Branded Download links
              </span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
              <span className="text-lg text-gray-700">Analytics</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faXmark} className="text-gray-500" />
              <span className="text-lg text-gray-700">Access to Plugins</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faXmark} className="text-gray-500" />
              <span className="text-lg text-gray-700">
                Access to restricted API
              </span>
            </li>
          </ul>

          <button className="border border-gray-300 bg-primary rounded-lg py-2 text-xl font-display font-semibold text-white shadow-sm">
            Get Started
          </button>
        </div>
      </div>

      <div className="border rounded-xl px-8 bg-black pt-12 pb-8 mt-8 flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6">
          <p className="text-gray-300 font-semibold font-display uppercase">
            Dedicated support and expert guidance
          </p>
          <h3 className="text-5xl text-white font-semibold font-display">
            Enterprise
          </h3>
          <ul className="grid grid-cols-2 gap-4 pt-3">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
              <span className="text-lg text-white">Whiteglove onboarding</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
              <span className="text-lg text-white">Custom features</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
              <span className="text-lg text-white">Priority support</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
              <span className="text-lg text-white">Shared Slack channel</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
              <span className="text-lg text-white">
                Dedicated account manager
              </span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
              <span className="text-lg text-white">Custom Billing</span>
            </li>
          </ul>
        </div>
        <div className="py-8 border bg-white rounded-xl flex justify-center">
          <div className="mx-auto max-w-xs px-6 flex flex-col justify-center lg:max-w-md lg:w-full">
            <p className="text-center text-gray-500 font-display font-semibold text-base mb-8">
              Secure, reliable cross-platform desktop apps for enterprise teams.
            </p>

            <a
              href=""
              className="border text-center text-white bg-primary px-8 py-3 rounded-lg mb-8 shadow hover:opacity-90"
            >
              Contact Sales
            </a>
            <p className="text-xs font-display text-gray-500 text-center">
              You may also live chat with us by{" "}
              <a href="" className="text-black border-b border-black">
                clicking here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
