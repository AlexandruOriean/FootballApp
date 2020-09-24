import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CarouselHomePage from "./components/pages/CarouselHomePage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselHomePage />
    </div>
  );
}

export default App();
