/* - Css Imports */
import "./css/root.css";
import "./css/Header.css";

/*- Component imports  */
import React, { Children } from "react";
import AboutUs from "./AboutUs.jsx";
import Header from "./Header.jsx";

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
		element: <RootLayout></RootLayout>
	}
]);

const rootLayout = createRoot(
	document.getElementById("root")
);

//- Deler dette i 2 for å ha mer oversikt. (render og createRoot)

rootLayout.render(
	<StrictMode>
		<RouterProvider router={routing}></RouterProvider>
	</StrictMode>
);
