import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div>
      <Navbar />;
      <PlayersList />;
    </div>
  );
}

export default App;
