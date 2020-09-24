import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CarouselHomePage from "./components/pages/CarouselHomePage";
import ChampionshipsList from './components/ChampionshipsList';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route
          exact
          path="/"
          component = {CarouselHomePage}        
        />
        <Route
          path='/about'
          component={About}
        /> 
        
        <Route
          path='/championships'
          component={ChampionshipsList}
        />
        
      </div>
    </Router>
  );

}

export default App;
