import React, { useState } from "react";
import { IconContext } from "react-icons";
import { PiSealQuestion } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import logo from "../logo.png";
import icon from "../icon.png";

const ChatPg = () => {
  const [dept, setDept] = useState("marketing");
  const [settingMenu, setSettingMenu] = useState(true);

  return (
    <div className="h-screen">
      <div className="h-[10%] flex flex-row justify-between items-center px-5 w-full bg-[#0095A9]">
        <div className="bg-white border-[1px] border-black px-2 py-1 xl:py-0 rounded ">
          <img
            src={logo}
            alt="logo"
            style={{ height: "3rem" }}
            className="xl:flex hidden"
          />
          <img
            src={icon}
            alt="logo"
            style={{ height: "3rem" }}
            className="xl:hidden"
          />
        </div>
        <div className="hidden gap-4 md:flex md:flex-row md:justify-center md:items-center  md:visible">
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
        <div className="-m-2 flex md:hidden">
          <button
            type="button"
            onClick={() => {
              setSettingMenu(settingMenu ? false : true);
            }}
            className="inline-flex items-center justify-center p-2 rounded"
          >
            {settingMenu ? (
              <IconContext.Provider value={{ color: "white", size: "24px" }}>
                <RxCross2 />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ color: "white", size: "24px" }}>
                <TbSettings />
              </IconContext.Provider>
            )}
          </button>
        </div>
      </div>
      {settingMenu ? (
        <div className="md:hidden h-screen w-[full] bg-[#0095A9]">
          <div className="w-full h-full flex flex-col justify-start items-start gap-4 pt-4 border-t-2 border-black">
            <label className="w-full bg-white  px-2 py-2 border-2 border-black ">
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
            <div className="flex flex-row justify-start items-center gap-4 bg-white w-full px-2 py-2  border-2 border-black">
              <span className="">Profile</span>
            </div>
            <span className="bg-white w-full px-2 py-2  border-2 border-black ">
              +New Chat
            </span>
          </div>
        </div>
      ) : null}
      <div className="h-[90%] flex flex-row justify-center">
        <div className="w-[20%] md:flex md:justify-center md:items-center hidden ">
          <div className="h-[94%] w-[95%] border-[1px] border-slate-600 rounded flex flex-col justify-between items-center">
            <span className="border-[1px] border-slate-600 h-8 mt-2 w-[80%] text-center ">
              +New Chat
            </span>
            <div></div>
          </div>
        </div>
        <div className="h-auto w-full lg:w-[90%] xl:w-[80%] flex flex-row justify-center items-end md:pb-5 mx-4 pb-2">
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
