import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./css/root.css";
import App from "./Header.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App></App>
	</StrictMode>
);
