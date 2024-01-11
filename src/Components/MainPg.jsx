import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo-white.png";
import icon from "../icon.png";
const MainPg = () => {
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
    <div className="h-screen flex flex-col justify-center items-center bg-[#323842] gap-2">
      <span className="text-xl sm:text-4xl font-bold text-white">
        Welcome in
      </span>
      {windowSize[0] < 768 ? (
        <img src={icon} style={{ height: "4rem" }} alt="logo" />
      ) : (
        <img src={logo} style={{ height: "5rem" }} alt="logo" />
      )}
      <Link
        to="login"
        className=" text-sm sm:text-lg border-2 border-white rounded cursor-pointer px-4 py-2 text-white mt-8"
      >
        Login!
      </Link>
    </div>
  );
};

export default MainPg;
