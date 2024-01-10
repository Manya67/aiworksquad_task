import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo-white.png";
const MainPg = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#323842] gap-2">
      <span className="text-4xl font-bold text-white">Welcome in</span>
      <img src={logo} style={{ height: "5rem" }} alt="logo" />
      {/* <span className="text-6xl font-bold text-white">AiworkSquad</span> */}
      <Link
        to="login"
        className="text-lg border-2 border-white rounded cursor-pointer px-4 py-2 text-white mt-8"
      >
        Login!
      </Link>
    </div>
  );
};

export default MainPg;
