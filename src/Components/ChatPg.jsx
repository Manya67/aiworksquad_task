import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { PiSealQuestion } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../logo.png";
import icon from "../icon.png";

const ChatPg = () => {
  const [dept, setDept] = useState("marketing");
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="h-screen">
      <div className="h-[10%] flex flex-row justify-between items-center px-5 w-full bg-[#0095A9]">
        <div className="bg-white border-[1px] border-black px-2 py-1 xl:py-0 rounded ">
          {windowSize[0] >= 1280 ? (
            <img src={logo} alt="logo" style={{ height: "3rem" }} />
          ) : (
            <img src={icon} alt="logo" style={{ height: "3rem" }} />
          )}
        </div>
        {windowSize[0] >= 641 ? (
          <div className="flex flex-row justify-center items-center gap-4">
            <label className="bg-white lg:px-1 xl:px-3 py-2 rounded border-2 border-black">
              Department:
              <select
                value={dept}
                onChange={(e) => {
                  setDept(e.target.value);
                }}
                className="outline-none"
              >
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
              </select>
            </label>
            <div className="flex flex-row justify-center items-center gap-4">
              <IconContext.Provider value={{ color: "white", size: "18px" }}>
                <BsPersonCircle />
              </IconContext.Provider>
              <span className="text-white">Nithin</span>
            </div>
          </div>
        ) : (
          <div>
            <IconContext.Provider value={{ color: "white", size: "32px" }}>
              <PiSealQuestion />
            </IconContext.Provider>
          </div>
        )}
      </div>
      <div className="h-[90%] flex flex-col lg:flex-row lg:justify-center">
        {windowSize[0] >= 1024 ? (
          <div className="w-[20%] flex justify-center items-center">
            <div className="h-[94%] w-[95%] border-[1px] border-slate-600 rounded flex flex-col justify-between items-center">
              <span className="border-[1px] border-slate-600 h-8 mt-2 w-[80%] text-center ">
                +New Chat
              </span>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="h-[5%] flex justify-start items-start">
            <IconContext.Provider value={{ color: "#0095A9", size: "32px" }}>
              <PiSealQuestion />
            </IconContext.Provider>
          </div>
        )}
        <div className=" h-[90%] lg:h-auto lg:w-[90%] xl:w-[80%] flex flex-row justify-center items-end lg:pb-8 mx-4">
          <span className="w-full xl:w-[90%] bg-transparent border-[1px] border-slate-600 rounded flex flex-row justify-center items-center h-[10%] gap-2">
            <IconContext.Provider value={{ color: "#0095A9", size: "32px" }}>
              <PiSealQuestion />
            </IconContext.Provider>
            <input
              type="text"
              placeholder={`${
                dept === "marketing"
                  ? "Enter your marketing query here..."
                  : "Enter your sales query here..."
              }`}
              className="w-[90%] h-full outline-none"
            />
            <IconContext.Provider value={{ color: "#0095A9", size: "32px" }}>
              <LuSendHorizonal />
            </IconContext.Provider>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatPg;
// nithin
// new chat ?
