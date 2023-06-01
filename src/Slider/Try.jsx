import React from "react";
import img1 from "./fillaap-01/fillaap-01.jpg";
import img2 from "./fillaap-01/fillaap-02.jpg";
import img3 from "./fillaap-01/fillaap-studios-0-2b.jpg";
import img4 from "./fillaap-01/fillaap-studios-0-2c.jpg";
import img5 from "./fillaap-01/fillaap-studios-00abc.jpg";
import img6 from "./fillaap-01/fillaap-studios-01 (2).jpg";
import img7 from "./fillaap-01/fillaap-studios-01 (1).jpg";
import img8 from "./fillaap-01/fillaap-studios-01-scene-1-level-png.jpg";
import img9 from "./fillaap-01/fillaap-studios-01.jpg";
import img10 from "./fillaap-01/fillaap-studios-01c.jpg";
import img11 from "./fillaap-01/fillaap-studios-02a.jpg";
import img12 from "./fillaap-01/fillaap-studios-gaming-nft-metaverse-group-14.jpg";

const Try = () => {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:grid-flow-row-dense lg:gap-2 p-6 lg:p-10 bg-slate-700 flex flex-wrap -m-4">
      {/* <img src={img7} alt="i1" className='h-full col-span-2 row-span-2  rounded-lg mb-2 ' />
        <img src={img9} alt="i1" className='h-full col-span-2  rounded-lg mb-2'/>
        <img src={img2} alt="i1" className='h-full col-span-2 row-span-2 rounded-lg mb-2'/>
        <img src={img3} alt="i1" className='h-full col-span-2  rounded-lg mb-2'/>
        <img src={img12} alt="i1" className='h-full col-span-2 row-span-2 rounded-lg mb-2'/>
        <img src={img4} alt="i1" className='h-full col-span-2  rounded-lg mb-2'/>
        <img src={img10} alt="i1" className='h-full col-span-2 row-span-2 rounded-lg mb-2'/>
        <img src={img8} alt="i1" className='h-full col-span-2  rounded-lg mb-2'/>
        <img src={img5} alt="i1" className='h-full col-span-2 row-span-2 rounded-lg mb-2'/>
        <img src={img1} alt="i1" className='h-full col-span-2  rounded-lg mb-2'/>
        <img src={img11} alt="i1" className='h-full col-span-2 row-span-2 rounded-lg mb-2'/>
        <img src={img6} alt="i1" className='h-full col-span-2  rounded-lg'/> */}

      <div className="h-full col-span-2 row-span-2  rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img7}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Barbarion Warrior</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img9}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Druid-Game Ready</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2 row-span-2  rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img2}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Detective Pikachu</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img3}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Mk 13 Mod 7 Sniper Rifle</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2 row-span-2  rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img12}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">The Good Dinosaur</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img4}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Mk 13 Mod 7 Sniper Rifle</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2 row-span-2  rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img10}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Druid-Game Ready</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img8}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Godzilla</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2 row-span-2  rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img5}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Artillery L118 Gun</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img1}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Druid-Game Ready</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2 row-span-2  rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img11}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Game Ready Mouse</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="h-full col-span-2   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
            src={img6}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Prince Roogers Nelson</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Try;
