import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CarouselHomePage from "./components/pages/CarouselHomePage";


import teamsImg from "./images/teams.jpg";
console.log(teamsImg);

function App() {
    return (
        <div className="App">          
                <Navbar />
                <CarouselHomePage />       
        </div>
    );
}

export default App;
