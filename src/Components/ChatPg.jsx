import React, { useState } from "react";
import { IconContext } from "react-icons";
import { PiSealQuestion } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";

const ChatPg = () => {
  const [dept, setDept] = useState("marketing");
  return (
    <div className="h-screen">
      <div className="h-[10%] bg-[#0095A9] flex flex-row justify-between items-center px-5 w-full">
        <span className=" h-10 w-10 bg-slate-500" />
        <div className="flex flex-row justify-center items-center gap-4">
          <label className="bg-white px-3 py-2 rounded border-2 border-black">
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
          <span classname="flex flex-row justify-center items-center border-2 border-black">
            <IconContext.Provider value={{ color: "white", size: "18px" }}>
              <BsPersonCircle />
            </IconContext.Provider>
            <span className="text-white">Nithin</span>
          </span>
        </div>
      </div>
      <div className="h-[90%] flex flex-row">
        <div className="w-[12%] flex justify-center items-center">
          <div className="h-[94%] w-[95%] border-[1px] border-slate-600 rounded flex flex-col justify-between items-center">
            <span className="border-[1px] border-slate-600 h-8 mt-2 w-[80%] text-center ">
              +New Chat
            </span>
            <div></div>
          </div>
        </div>
        <div className="w-[88%] flex flex-row justify-center items-end pb-8">
          <span className="w-[90%] bg-transparent border-[1px] border-slate-600 rounded flex flex-row justify-center items-center h-[10%] gap-2">
            <IconContext.Provider value={{ color: "#0095A9", size: "32px" }}>
              <PiSealQuestion />
            </IconContext.Provider>
            <input
              type="text"
              placeholder={`${
                dept == "marketing"
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
