import { FaTachometerAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="px-6 pt-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          <FaTachometerAlt className="inline-block mr-3 text-blue-600" />
          Welcome to Your Dashboard
        </h2>
        <p className="text-lg text-gray-600">
          Here you can manage all your data, create new content, and explore
          more.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h3 className="text-2xl font-medium text-gray-700 mb-4">Overview</h3>
        <p className="text-md text-gray-500">
          Get an overview of your activities, manage your projects, and more.
        </p>
      </div>
    </div>
  );
}

export default Home;
