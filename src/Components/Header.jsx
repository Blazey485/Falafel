import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

const Header = () => {
	return (
		<div className="main">
			<div className="header">
				<nav>
					<ul>
						<li>
							<Link
								to="/"
								className="text-decoration-none text-white"
							>
								Home
							</Link>
						</li>

						<li>
							<Link
								to="/meny"
								className="text-decoration-none text-white"
							>
								Menyen
							</Link>
						</li>

						<li>
							<Link
								to="/contact"
								className="text-decoration-none text-white"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<h1>🧆 JENS FALAFEL 🧆</h1>
			</div>
		</div>
	);
};
export default Header;
