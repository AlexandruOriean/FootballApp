import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CarouselHomePage from "./components/pages/CarouselHomePage";
import TeamList from './components/TeamList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselHomePage />
      <TeamList/>
    </div>
  );
}

export default App;
