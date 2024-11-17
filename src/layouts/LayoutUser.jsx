import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const LayoutUser = () => {
  return (
    <div className="mt-20">
      <MainNav />
      <main className="h-full px-4 mt-2 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutUser;
