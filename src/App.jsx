import React from "react";
import Header from "./Header";
import QueryFilter from "./QueryFilter";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-300">
      <Header />
      <div className="flex-grow flex justify-center">
        <QueryFilter />
      </div>
      <Footer />
    </div>
  );
}

export default App;

