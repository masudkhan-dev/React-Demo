import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
