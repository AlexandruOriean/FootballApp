import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import PlayerList from "./components/PlayersList";

function App() {
  return (
    <div>
      <Navbar />;
      <PlayerList />;
    </div>
  );
}

export default App;
