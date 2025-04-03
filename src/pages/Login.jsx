import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hook/useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // React Icons
import Loader from "./Loader";

function Login() {
  const { login, isPending } = useLogin();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login(email, password);
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
          Login
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
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
                {showPassword ? (
                  <FaEyeSlash className="text-lg text-gray-600" />
                ) : (
                  <FaEye className="text-lg text-gray-600" />
                )}
              </button>
            </div>
          </label>
          <button className="bg-purple-700 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-purple-800 hover:scale-105">
            {isPending ? <Loader /> : "Login"}
          </button>
          <button className="bg-pink-600 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-pink-700 hover:scale-105">
            Login with Google
          </button>
        </form>
        <div className="text-center text-white mt-4">
          <p>
            Don't have an account?{" "}
            <NavLink
              className="text-blue-400 underline hover:text-blue-600 transition-all duration-300"
              to="/register"
            >
              Register here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
