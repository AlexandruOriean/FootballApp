import React, { useState, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TeamList from "./components/TeamList";
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <Fragment>
            <Navbar />
            <TeamList />
        </Fragment>
    );
}

export default App;
