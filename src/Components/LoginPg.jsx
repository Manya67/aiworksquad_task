import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import logo from "../logo-white.png";
import { useNavigate } from "react-router-dom";

const LoginPg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const checkLogin = () => {
    if (email === "user123" && password === "pass123") {
      toast.success("Correct");
      navigate("/chat");
    } else {
      toast.error("Incorrect login information.");
    }
  };
  return (
    <div className="h-screen flex flex-col bg-[#323842]">
      <div className="h-[10%] flex flex-row justify-start items-center mx-4 my-4">
        <img src={logo} alt="logo" style={{ height: "3rem" }} />
      </div>
      <div className="h-[85%] flex flex-row justify-center items-center">
        <div className="bg-black w-[38%] h-[80%] flex flex-col text-white justify-start items-center pt-8 gap-4">
          <span className="font-bold text-3xl">Welcome Back</span>
          <span>Sign in to continue to Aiworksquad.</span>
          <div className="flex flex-col gap-4 w-[50%] pt-5 pb-3">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-[1px] border-slate-600 h-12 px-4 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent border-[1px] border-slate-600 h-12 px-4 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-row justify-between items-center text-xs">
              <div className="flex flex-row gap-1 justify-center items-center">
                <input
                  type="checkbox"
                  placeholder="Remember me"
                  id="remember"
                  className=""
                />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <span className="text-[#9095A0]">Forgot Password?</span>
            </div>
          </div>
          <button
            className="bg-[#4069E5] w-[50%] h-10 rounded"
            onClick={checkLogin}
          >
            Login
          </button>
          <Toaster />
        </div>
      </div>
      <div className="h-[5%] flex flex-row justify-center items-center gap-1 text-white my-3">
        <span>2023 </span>
        <span>AiworkSquad.</span>
      </div>
    </div>
  );
};

export default LoginPg;
// checkbox
