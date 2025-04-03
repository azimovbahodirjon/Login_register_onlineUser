import { useSignOut } from "../hook/useLogout";

function Navbar() {
  const { isPending, signout } = useSignOut();
  return (
    <div className="w-full flex justify-between items-center shadow-lg px-6 py-3 bg-white border-b">
      <div className="flex items-center gap-2">
        <img
          className="rounded-lg cursor-pointer"
          src="https://www.shutterstock.com/image-vector/setting-icon-260nw-639144637.jpg"
          width={50}
          height={50}
        />
        <span className="text-xl font-semibold text-gray-700">My App</span>
      </div>
      <button
        className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
        onClick={signout}
        disabled={isPending}
      >
        {isPending ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}

export default Navbar;
