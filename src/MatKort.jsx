
import menyData from "./utils/meny.js";


const MatKort = (props) => {
	const menyData = props;
	const { navn, price, picture, ingridients, id } = menyData;
	console.log(menyData);
	return (
		<div className="menu">
			<img
				src={picture}
				alt=""
			/>
			<h1>{navn}</h1>
			<h3>{price} </h3>
			<h3>{ingridients}</h3>
		</div>
	);
};

export default MatKort;