import { useSelector } from "react-redux";
import { useCollection } from "../hook/useCollection";

function OnLineUser() {
  const { data } = useCollection("users");
  const { user } = useSelector((store) => store.user); // Hozirgi foydalanuvchi

  let sortedUsers = [];
  if (data) {
    sortedUsers = [...data].sort((a, b) =>
      a.id === user.id ? -1 : b.id === user.id ? 1 : 0
    );
  }

  return (
    <div className="bg-gray-800 text-white col-start-11 col-end-13 flex flex-col pt-10 px-6 shadow-lg rounded-lg max-w-xs">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-lg font-semibold text-gray-100">Online Users</h2>
      </div>
      {sortedUsers.map((u) => (
        <div
          key={u.id}
          className={`flex items-center gap-4 bg-white p-3 rounded-lg shadow-md mb-3 border ${
            u.id === user.id ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-400">
            <img
              className="w-full h-full object-cover"
              src={u.photoURL}
              alt={u.displayName}
            />
          </div>
          <h3
            className={`text-md font-medium ${
              u.id === user.id ? "text-blue-600" : "text-gray-900"
            }`}
          >
            {u.displayName} {u.id === user.id && "(You)"}
          </h3>
          <span
            className={`w-3 h-3 rounded-full ml-auto ${
              u.isOnline ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </div>
      ))}
    </div>
  );
}

export default OnLineUser;
