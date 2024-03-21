import React from "react";

function Navbar() {
  return (
    <div className="ml-10 mr-10 mt-5">
      <div className="flex p-5 min-w-screen bg-violet-600 justify-between items-center rounded">
        <p className="text-white ">Kavi Store</p>
        <div className=" text-white">
          <ul className="flex gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
