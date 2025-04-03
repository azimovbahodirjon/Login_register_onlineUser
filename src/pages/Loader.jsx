import React from "react";
import { FaCircleNotch } from "react-icons/fa";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-8 rounded-xl shadow-xl flex flex-col items-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center">
          <FaCircleNotch className="animate-spin text-white text-3xl" />
        </div>
        <span className="text-white font-bold text-xl">Please wait...</span>
        <div className="w-16 h-1 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default Loader;
