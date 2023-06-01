import React from "react";
function Insidenextsec() {
  return (
    <div className="lg:flex justify-around m-6">
      <div className="left ">
        <div className="flex items-center space-x-2">
          <span className="w-10">
            <hr />
          </span>
          <h4 className=" text-white xt-lg">Awsome Works</h4>
        </div>
        <h1 className="text-white text-4xl lg:text-6xl font-extrabold ">
          Our Creative Works.
        </h1>
      </div>
      <div className=" h-100px btn m-2">
        <button className="p-3 border-2 border-transparent text-sm bg-white mt-2 hover:bg-black hover:text-yellow-50 hover:border-2 hover:border-white rounded-sm">
          VIEW FULL PORTFOLIO
        </button>
      </div>
    </div>
  );
}

export default Insidenextsec;
