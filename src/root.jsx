import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./css/root.css";

import Header from "./Header.jsx";

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
