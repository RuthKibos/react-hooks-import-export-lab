import React, { Component } from "react";

import About from "./Components/About";
import Home from "./components/Home"; 
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

