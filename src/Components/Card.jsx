import { Link } from "react-router-dom";

const Card = ({ item }) => {
	const { name, username, id } = item;

	const addFav = (e) => {
		e.preventDefault();
		const favs = JSON.parse(localStorage.getItem("items")) ?? [];
		localStorage.setItem("items", JSON.stringify([...favs, item]));
	};

	return (
		<div className="card">
			<Link to={`/detail/${id}`}>
				<img src="/public/images/doctor.jpg" alt="photo" />
				<h4>Name: {name}</h4>
				<h4>Username: {username}</h4>
			</Link>
			<button onClick={addFav} className="favButton">
				Add fav
			</button>
		</div>
	);
};

export default Card;
