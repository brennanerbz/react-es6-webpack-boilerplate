import React from "react";
import Main from "../components/main";
import Home from "../components/home";

// Import router methods in ES6
import { Router, Route, DefaultRoute } from "react-router";

export default (
	// Main is the top nav with search
	// Default to the home view if nothing else is available
	<Route name="app" path="/" handler={Main}>
		<DefaultRoute handler={Home}/>
	</Route>
);