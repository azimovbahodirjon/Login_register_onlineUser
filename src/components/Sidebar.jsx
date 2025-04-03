import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import { RxDashboard } from "react-icons/rx";
import { MdCreateNewFolder } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook

function Sidebar() {
  const { user } = useSelector((store) => store.user);
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate(); // Use the navigate hook

  const handleNavigation = (route) => {
    setActive(route);
    navigate(`/${route.toLowerCase()}`); // Navigate to the respective route
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col items-center py-10 shadow-lg">
      <div className="mb-8">
        <Avatar user={user} />
      </div>
      <nav className="w-full">
        <ul className="flex flex-col gap-2 w-full">
          <li
            className={`flex items-center gap-3 py-3 px-6 cursor-pointer rounded-lg transition-all duration-200 ${
              active === "dashboard" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => handleNavigation("dashboard")}
          >
            <RxDashboard size={20} />
            <span>Dashboard</span>
          </li>
          <li
            className={`flex items-center gap-3 py-3 px-6 cursor-pointer rounded-lg transition-all duration-200 ${
              active === "Create" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => handleNavigation("Create")}
          >
            <MdCreateNewFolder size={20} />
            <span>Create</span>
          </li>
          <li
            className={`flex items-center gap-3 py-3 px-6 cursor-pointer rounded-lg transition-all duration-200 ${
              active === "Settings" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => handleNavigation("Settings")}
          >
            <IoIosSettings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
