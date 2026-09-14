import MatKort from "./MatKort.jsx";
import { use, useState } from "react";
import menyData from "./utils/meny.js";

const Body = () => {
	const [matretter, setMatretter] = useState(menyData);
	return (
		<div className="Falafel_menu">
			<br />
			<br />
			<h1 className="menu_title">Falafelene vi tilbyr</h1>

			<div className="menu-container">
				{matretter.map((filtered) => (
					<MatKort
						key={filtered.id}
						MatKort={filtered}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
