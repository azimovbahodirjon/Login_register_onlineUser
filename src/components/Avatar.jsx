function Avatar({ user }) {
  const { displayName, photoURL } = user;
  return (
    <div className="avatar flex flex-col items-center gap-5 text-black">
      <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-gray-300 shadow-lg overflow-hidden">
        <img src={photoURL} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-medium text-center text-white">
        Hello, {displayName} 😊
      </h3>
    </div>
  );
}

export default Avatar;
