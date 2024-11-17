import React from "react";
import { Gauge } from "lucide-react";
import { SquareKanban } from "lucide-react";
import useEcomStore from "../../store/ecom-store";
import { Link, NavLink, useNavigate } from "react-router-dom";



const SidebarAdmin = () => {
  const logout = useEcomStore((state) => state.logout);
  const navigate = useNavigate();

  const logoutToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-600 w-60 text-gray-100 flex flex-col h-screen">
      <div className="h-24 bg-gray-900 flex items-center justify-center font-bold text-2xl">
        Admin Panel
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavLink
          to={"/admin"}
          end
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 px-4 py-2 text-white flex items-center rounded-md"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <Gauge className="mr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to={"manage"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 px-4 py-2 text-white flex items-center rounded-md"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <SquareKanban className="mr-2" />
          Manage
        </NavLink>
        <NavLink
          to={"Category"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 px-4 py-2 text-white flex items-center rounded-md"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <SquareKanban className="mr-2" />
          Category
        </NavLink>
        <NavLink
          to={"product"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 px-4 py-2 text-white flex items-center rounded-md"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <SquareKanban className="mr-2" />
          Product
        </NavLink>
        <NavLink
          to={"orders"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-950 px-4 py-2 text-white flex items-center rounded-md"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <SquareKanban className="mr-2" />
          Orders
        </NavLink>
      </nav>
      <NavLink
        onClick={() => {
          logoutToHome();
        }}
        className={({ isActive }) =>
          isActive
            ? "bg-gray-950 px-4 py-2 text-white flex items-center hover:bg-gray-700"
            : "bg-gray-950 text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
        }
      >
        <SquareKanban className="mr-2" />
        BACK
      </NavLink>
    </div>
  );
};

export default SidebarAdmin;
