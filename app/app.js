// This is the core of the app, where React renders out to DOM
// Pass state from highest point in hierarchy on down
import React from "react";
import Router from "react-router";
import routes from "./config/routes";

Router.run(routes, function (Root, state) {
	React.render(<Root {...state} />, document.getElementById('app'));
});