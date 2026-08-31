import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

const Header = () => {
	return (
		<div className="main">
			<div className="header">
				<h1>🧆 JENS FALAFEL 🧆</h1>

				<nav>
					<ul>
						<li>Home</li>

						<li>
							<Link to="/about">About us</Link>
						</li>

						<li>Contact</li>

						<li>Login</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
export default Header;
