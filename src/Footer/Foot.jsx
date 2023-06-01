import React from "react";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaArtstation } from "react-icons/fa";
import {  AiOutlineInstagram } from "react-icons/ai";

const Foot = () => {
  return (
    <div>
      <div className="second flex items-center justify-between m-2">
        <div className="lefttext">
          <h1 className="text-white font-bold text-lg">Social : </h1>
          <p className="text-white">
            <div className="flex">
              <div className=" hover:text-violet-400 shadow-lg">
                {" "}
                <a href="https://www.artstation.com/fillaap">
                  <FaArtstation />
                </a>
              </div>
              <div className="ml-2 hover:text-violet-400  shadow-lg">
                <a href="https://www.instagram.com/fillaap.insta/">
                  <AiOutlineInstagram />
                </a>
              </div>
              <div className="ml-2 hover:text-violet-400 shadow-lg ">
                <a href="https://www.facebook.com/gaming/yourfillaap">
                  <FiFacebook />
                </a>
              </div>
              <div className="ml-2 hover:text-violet-400 shadow-lg">
                <a href="https://www.linkedin.com/company/fillaap/" >
                  <FiLinkedin />
                </a>{" "}
              </div>
            </div>
          </p>
        </div>
        <div className="rightsec ">
          <p className="text-white text-sm">All rights reserved</p>
          <br />

          <p className="text-white text-sm">
            <a href="/">© 2022, Fillaap</a>
          </p>
          <p className="text-white text-sm">
            Made with <span className="text-red-700">❤</span> in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foot;
