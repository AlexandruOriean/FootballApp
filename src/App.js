import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ChampionshipsList from "./components/ChampionshipsList";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

function App() {
	return (
		<Router>
            <Fragment >
                <Route path="/championsList/:id"
                    // component = {}
                />
				<Navbar />
				<ChampionshipsList />
			</Fragment>
		</Router>
	);
}

export default App;
