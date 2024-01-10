import "./App.css";
import MainPg from "./Components/MainPg";
import LoginPg from "./Components/LoginPg";
import ChatPg from "./Components/ChatPg";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPg />,
      },
      {
        path: "login",
        element: <LoginPg />,
      },
      {
        path: "chat",
        element: <ChatPg />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
