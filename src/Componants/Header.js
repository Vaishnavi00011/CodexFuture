import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [move, setmove] = useState(false);
  return (
    <div className="flex fixed z-10 w-full bg-gray-100 justify-between shadow-md items-center py-4 px-6">
      {/* Logo Section */}
      <Link to={"/"}>
        <div className="flex gap-2 items-center">
          <img
            className="w-8 h-8"
            src="https://www.smartfuturestep.com/assets/images/favicon.png"
            alt="Logo"
          />
          <label className="font-bold text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-black">
            CodexFutureTechnologies
          </label>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 items-center justify-center">
        <Link to="/about-us">
          <label className="l1 text-black text-sm md:text-lg font-semibold font-serif hover:text-green-700 transition">
            About
          </label>
        </Link>
        <Link to="/sarvice">
          <label className="l1 text-black text-sm md:text-lg font-semibold font-serif hover:text-green-700 transition">
            Services
          </label>
        </Link>
        <Link to="/resources">
          <label className="l1 text-black text-sm md:text-lg font-semibold font-serif hover:text-green-700 transition">
            Resources
          </label>
        </Link>
        <Link to="/contact">
          <label className="l1 text-black text-sm md:text-lg font-semibold font-serif hover:text-green-700 transition">
            Contact
          </label>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-black focus:outline-none hover:text-green-700 transition">
          <i
            onClick={() => {
              if (move == true) {
                setmove(false);
              } else {
                setmove(true);
              }
            }}
            class="fa fa-bars"
            aria-hidden="true"
          ></i>
          {move == true && (
            <div className="bg-white right-0 w-[30%]  top-16  absolute">
              <div className=" flex flex-col gap-4 items-center justify-center">
                <Link to="/about-us">
                  <label className=" text-black text-sm md:text-lg font-semibold font-serif hover:text-green-700 transition">
                    About
                  </label>
                </Link>
                <Link to="/sarvice">
                  <label className=" text-black text-sm md:text-lg font-semibold font-serif hover:text-green-700 transition">
                    Services
                  </label>
                </Link>
                <Link to="/resources">
                  <label className=" text-black text-sm md:text-lg font-semibold font-serif hover:text-green-700 transition">
                    Resources
                  </label>
                </Link>
                <Link to="/contact">
                  <label className=" text-black text-sm md:text-lg font-semibold font-serif hover:text-green-700 transition">
                    Contact
                  </label>
                </Link>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
