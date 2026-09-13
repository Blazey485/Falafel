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
								to="/about"
								className="text-decoration-none text-white"
							>
								About us
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
			</div>
		</div>
	);
};
export default Header;
