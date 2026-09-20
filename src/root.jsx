/* - Css Imports */
import "./css/root.css";
import "./css/Header.css";
import "./css/menu.css";

/*- Component imports  */
import React, { Children } from "react";
import AboutUs from "./Components/AboutUs.jsx";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import Error from "./Components/Error.jsx";

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
			<Footer></Footer>
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
				element: <AboutUs></AboutUs>
			},

			{
				path: "/meny",
				element: <Body></Body>
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
