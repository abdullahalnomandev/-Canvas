"use client";
import Image from "next/image";
import { useState } from "react";

const HomeCanvas = () => {
  const [isOn, setIsOn] = useState(true);
  const [speed,setSpeed] = useState(50);

  return (
    <div className="">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-white font-bold text-2xl">Testing Canvas</h1>
        </div>
        <div className="flex justify-between gap-4">
          <button className="text-white bg-gray-900 hover:bg-gray-800 py-2 px-3 rounded-md">
            Clear
          </button>
          <button className="text-white bg-blue-600 hover:bg-gray-700 py-2 px-3 rounded-md cursor-pointer">
            Save Preset{" "}
          </button>
        </div>
      </nav>
      {/* // canvas area */}
      <div className="mt-4 w-full relative h-[calc(100vh-80px)] bg-[#090f1d] border border-gray-700 rounded-lg ">
        <div className=" flex items-center justify-center h-[calc(100vh-160px)]">
          <Image
            src="/fan.webp"
            className={`rounded-full ${isOn ? "rotate-container":""} img`}
            alt="canvas"
            width={270}
            height={270}
            style={{
              "--rotate-speed": isOn ? `${Math.max(0.5, 5 - (speed / 100) * 4.5)}s` : "0s",
            } as React.CSSProperties}
          />
        </div>
        {/* Control  */}
        <div className="w-2/6 absolute bottom-1 left-1/2 transform -translate-x-1/2 mx-auto p-4 bg-[#101828] border border-gray-700 rounded-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-white">Power</h1>
            <div className="relative inline-block w-11 h-5">
              <input
                checked={isOn}
                onChange={(e) => setIsOn(e.target.checked)}
                id="switch-component"
                type="checkbox"
                className="peer appearance-none w-11 h-5 bg-slate-800 rounded-full checked:bg-blue-500
                 cursor-pointer transition-colors duration-300"
              />
              <label className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"></label>
            </div>
          </div>
            {/* RANGe  */}

           <div className="flex items-center justify-between py-4">
            <h1 className="text-white">Speed</h1>
            <p className="text-white">{speed}%</p>
           </div>
          <input type="range"   onChange={(e) => setSpeed(Number(e.target.value))}
 min={0} height={3} max="100" value={speed} className="range w-full! range-secondary cursor-pointer" />

        </div>
      </div>
    </div>
  );
};
export default HomeCanvas;
