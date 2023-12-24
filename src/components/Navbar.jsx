/* eslint-disable no-unused-vars */
import React from "react";

// logo
import Logo from "../assets/logo.png";

// react-icons
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <a href="" className="">
                <img className="w-16" src={Logo} alt="logo" />
              </a>
              {/* //* made to create a seperator */}
              <div className="border-r-2 border-tertiary text-transparent ">
                {"|||"}
              </div>

              <div className="text-white flex ">
                <ul className="flex gap-5 items-center">
                  <li className="">
                    <a className="" href="#/explore">
                      Explore
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#/release">
                      Release
                    </a>
                  </li>
                  <li className="relative">
                    <input
                      className="bg-gray-700/50 pl-5 py-2 px-4 rounded-2xl 
                      outline-none"
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search for games..."
                    />
                    <IoSearch
                      className="text-gray-500 absolute 
                    right-3 top-1/2 -translate-y-1/2  h-6 w-9"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white">
              <ul className="flex gap-4 items-center ">
                <li className="">
                  <a
                    href="#about"
                    className="bg-gray-400/20  shadow-md font-semibold py-2 px-4
                     rounded-2xl inline-block"
                  >
                    Log In
                  </a>
                </li>
                <li className="">
                  <a
                    href="#about"
                    className="bg-gradient-to-r 
                     from-purple-800 to-secondary shadow-md font-semibold py-2 px-4
                     rounded-2xl inline-block"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
