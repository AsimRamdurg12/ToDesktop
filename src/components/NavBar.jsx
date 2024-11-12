import React, { useState } from "react";
import { logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../constants";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="p-3 flex bg-white justify-between items-center">
        <a href="/" id="brand" className="flex flex-1 items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="max-h-12 max-w-12 object-cover"
          />
          <span className="font-semibold text-lg font-display">ToDesktop</span>
        </a>

        <div className="hidden lg:flex gap-12">
          {navLinks.map((link) => (
            <a
              className="font-medium text-lg"
              key={link.label}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <div className="flex justify-center items-center gap-2 border-slate-gray border py-2 px-5 text-base font-semibold rounded-lg hover:border-gray-600">
            <FontAwesomeIcon icon={faReact} className="h-6 w-6" />
            <button>Electron Developer</button>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#828282]" />
          </div>
        </div>

        <div
          className="lg:hidden m-2 flex flex-1 items-center justify-end max-h-[12px] max-w-[16px] cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <FontAwesomeIcon icon={faXmark} className="text-gray-600" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-gray-600" />
          )}
        </div>
      </nav>

      <div className={`${!toggle ? "hidden" : "inset-0 bg-white"}`}>
        {navLinks.map((link) => (
          <ul className="flex flex-col font-medium cursor-pointer text-lg p-2 hover:bg-slate-100 mx-2 my-3 rounded-lg">
            <li
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            </li>
          </ul>
        ))}
        <hr />
        <div
          onClick={() => setToggle(!toggle)}
          className="flex my-5 justify-center items-center gap-2 py-5 px-5 text-base font-semibold rounded-lg hover:bg-slate-100"
        >
          <FontAwesomeIcon icon={faReact} className="h-6 w-6" />
          <span>Electron Developer</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
