import { useState } from "react";
import React from "react";

import "./css/Header.css";

const Header = () => {
	return (
		<div className="main">
			<div className="header">
				<h1>🧆 JENS FALAFEL 🧆</h1>
				<nav>
					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Contact</li>
						<li>Home</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
