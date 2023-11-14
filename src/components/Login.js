import React, { useRef, useState } from "react";
import "./login.css"; // Assuming you have a CSS file for styles
import video1 from "../assets/login.mp4";
function App() {
  const image1 =
    "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1200";
  const containerRef = useRef(null);
  const [isRotated, setIsRotated] = useState(false);

  const handleRotate = () => {
    setIsRotated(!isRotated);
    containerRef.current.style.transform = isRotated
      ? "rotateY(0deg)"
      : "rotateY(180deg)";
  };
  return (
    <div className="w-screen h-screen flex justify-center flex-row relative items-center">
      <video
        src={video1}
        loop
        autoPlay
        muted
        className="w-full h-full object-cover -z-50 absolute"
      />
      <div
        className=" md:w-96 md:h-[70%] w-[40%] h-[40%] flex justify-center items-center rounded-lg main-div_login selection:bg-white effect5"
        ref={containerRef}
      >
        <div className="front bg-[rgba(0,0,0,0.07)] w-full h-full flex flex-col justify-around items-center rounded-lg ">
          <div className="w-[80%] h-[70%] flex justify-center items-center flex-col gap-[29px]">
            <div className="">
              <h3 className="tracking-wider font-Paci text-sm md:text-3xl text-fuchsia-700 ">
                Welcome to Dribble
              </h3>
            </div>
            <div className="flex justify-center items-center flex-col w-full md:mt-10 mt-3">
              <div className="w-full">
                <input
                  className="w-full bg-transparent border shadow-sm border-fuchsia-700 placeholder-slate-800 focus:outline-none focus:border-fuchsia-950 focus:ring-fuchsia-950 block rounded-xl md:text-sm text-xs focus:ring-1 text-center md:h-[3rem] h-[1.5rem] font-semibold"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex justify-center items-center flex-col w-full">
              <div className="w-full">
                <input
                  className="w-full bg-transparent border shadow-sm border-fuchsia-700 placeholder-slate-800 focus:outline-none focus:border-fuchsia-950 focus:ring-fuchsia-950 block rounded-xl md:text-sm text-xs focus:ring-1 text-center md:h-[3rem] h-[1.5rem] font-semibold"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[50%] w-[70%] h-[30%] md:mb-2 md:mt-3 flex justify-center items-center flex-col gap-[25px]">
            <div>
              <span
                onClick={handleRotate}
                className="font-Patua md:text-sm text-center text-xs tracking-wide text-fuchsia-950 hover:text-fuchsia-500 cursor-pointer"
                href="#"
              >
                Don't Have any Account?
              </span>
            </div>
            <div className="w-full flex items-center justify-center ">
              <button className="md:w-full md:text-base text-xs w-[70%] md:h-11 h-5 login-btn bg-fuchsia-700 rounded-2xl ring-fuchsia-400 border-fuchsia-400 ring-1 text-slate-300 text-center font-Crete">Login</button>
            </div>
          </div>
        </div>

        <div className="back bg-[rgba(0,0,0,0.07)] w-full h-full flex flex-col justify-around items-center rounded-lg ">
          <div className="w-[80%] h-[80%]  flex flex-col justify-around items-center">
            <div className="h-[20%]">
              <h3 className="tracking-wider font-Paci md:text-3xl text-sm text-fuchsia-700 mt-5">
                Welcome to Dribble
              </h3>
            </div>
            <div className="h-[80%] w-full flex flex-col justify-around items-center">
              <div className="w-full h-[25%]">
                <input
                  className="w-full bg-transparent border shadow-sm border-fuchsia-700 placeholder-slate-800 focus:outline-none focus:border-fuchsia-950 focus:ring-fuchsia-950 block rounded-xl md:text-sm text-xs focus:ring-1 text-center md:h-[3rem] h-[1.5rem] font-semibold"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full h-[25%]">
                <input
                  className="w-full bg-transparent border shadow-sm border-fuchsia-700 placeholder-slate-800 focus:outline-none focus:border-fuchsia-950 focus:ring-fuchsia-950 block rounded-xl md:text-sm text-xs focus:ring-1 text-center md:h-[3rem] h-[1.5rem] font-semibold"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="w-full h-[25%]">
                <input
                  className="w-full bg-transparent border shadow-sm border-fuchsia-700 placeholder-slate-800 focus:outline-none focus:border-fuchsia-950 focus:ring-fuchsia-950 block rounded-xl md:text-sm text-xs focus:ring-1 text-center md:h-[3rem] h-[1.5rem] font-semibold"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="w-full h-[25%]">
                <input
                  className="w-full bg-transparent border shadow-sm border-fuchsia-700 placeholder-slate-800 focus:outline-none focus:border-fuchsia-950 focus:ring-fuchsia-950 block rounded-xl md:text-sm text-xs focus:ring-1 text-center md:h-[3rem] h-[1.5rem] font-semibold"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>
          <div className=" md:w-[50%] w-[70%] h-[20%] flex flex-col justify-around items-center">
            <div>
              <span
                onClick={handleRotate}
                className="font-Patua md:text-sm text-xs tracking-wide text-fuchsia-960 cursor-pointer hover:text-fuchsia-500"
                href="#"
              >
                Already Have Account?
              </span>
            </div>
            <div className="md:w-full w-[80%]">
              <a href="https://instagram.com/rishirohillaa_" target="_blank">
              <button  className="w-full md:h-11 h-5 login-btn md:text-base text-xs bg-fuchsia-700 rounded-2xl ring-fuchsia-400 border-fuchsia-400 ring-1 text-center font-Crete text-slate-300">Sign-Up</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
