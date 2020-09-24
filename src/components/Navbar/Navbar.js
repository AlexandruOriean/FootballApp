import React from "react";
import * as ReactBootStrap from "react-bootstrap";

export default function Navbar() {
	return (
		<div>
			<ReactBootStrap.Navbar bg="dark" variant="dark">
				<ReactBootStrap.Navbar.Brand href="#home">
					Goal
				</ReactBootStrap.Navbar.Brand>
				
				<ReactBootStrap.Form inline className = "nav navbar-nav ml-auto">
					<ReactBootStrap.FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2 "
					/>
					<ReactBootStrap.Button variant="outline-primary">
						Search
					</ReactBootStrap.Button>
				</ReactBootStrap.Form>
			</ReactBootStrap.Navbar>
		</div>
	);
}
