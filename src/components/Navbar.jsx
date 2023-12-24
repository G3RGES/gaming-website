/* eslint-disable no-unused-vars */
import React from "react";

// logo
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="">
              <a href="" className="">
                <img className="w-30" src={Logo} alt="logo" />
              </a>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
