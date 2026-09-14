/* - Css Imports */
import "./css/root.css";
import "./css/Header.css";
import "./css/menu.css";

/*- Component imports  */
import React, { Children } from "react";
import AboutUs from "./AboutUs.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";

import Error from "./Error.jsx";
/*- Dependecies Imports	*/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet
} from "react-router";

const RootLayout = () => {
	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
		</div>
	);
};

const routing = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout></RootLayout>,

		children: [
			{
				path: "/",
				element: <Body></Body>
			},

			{
				path: "/about",
				element: <AboutUs></AboutUs>
			}
		],
		errorElement: <Error></Error>
	}
]);

const rootLayout = createRoot(
	document.getElementById("root")
);


rootLayout.render(
	<RouterProvider router={routing}></RouterProvider>
);
