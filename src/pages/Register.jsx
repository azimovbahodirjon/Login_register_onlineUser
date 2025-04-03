import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../hook/useRegister";
import Loader from "./Loader";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const { register, isPending } = useRegister();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const displayName = formData.get("displayName");
    register(email, displayName, password);
  };

  return (
    <div
      className="h-screen flex items-center justify-center w-full bg-cover bg-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1920/1080')`,
      }}
    >
      <div className="p-8 rounded-2xl max-w-md w-full bg-transparent backdrop-blur-md shadow-lg">
        <h2 className="text-3xl text-center mb-4 font-bold text-white">
          Register
        </h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 items-center"
        >
          <label className="text-white w-full">
            Display Name
            <input
              type="text"
              name="displayName"
              placeholder="Enter your display name"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </label>
          <label className="text-white w-full">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </label>
          <label className="text-white w-full">
            Password
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </label>
          <button className="bg-purple-700 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-purple-800 hover:scale-105">
            {isPending ? <Loader /> : "Register"}
          </button>
          <button className="bg-pink-600 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-pink-700 hover:scale-105">
            Register with Google
          </button>
        </form>
        <div className="text-center text-white mt-4">
          <p>
            Already have an account?{" "}
            <NavLink
              className="text-blue-400 underline hover:text-blue-600 transition-all duration-300"
              to="/login"
            >
              Login here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
