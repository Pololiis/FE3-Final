import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
	const { name, username, id } = item;

	const addFav = () => {
		localStorage.setItem("favs", JSON.stringify(item));
	};

	return (
		<div className="card">
			<Link to={`/detail/${id}`}>
				<h4>Name: {name}</h4>
				<h4>Username: {username}</h4>
				<h4>Id: {id}</h4>
			</Link>
			<button onClick={addFav} className="favButton">
				Add fav
			</button>
		</div>
	);
};

export default Card;
