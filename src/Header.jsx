import React from "react";

function Header() {
  return (
    <div className="bg-gray-900 text-gray-300 p-2 flex items-center justify-center w-full">
      <div className="flex items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1669077046862-9283191f4ed7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo"
          className="h-10 w-10 mr-2"
        />
        <h1 className="text-xl font-bold"> QUERY BUILDER</h1>
      </div>
      
    </div>
  );
}

export default Header;
