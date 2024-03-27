import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const url = "https://jsonplaceholder.typicode.com/users";

	const [ list, setList ] = useState([]);

	useEffect(() => {
		axios.get(url)
    .then(response => setList(response.data))
    .catch(error => console.error("Error fetching data:", error));
	}, []);

	return (
		<main className="">
			<h1>Home</h1>
			<div className="card-grid">
				{list && list.map( odontologo => <Card key={odontologo.id} item={odontologo} />)}
			</div>
		</main>
	);
};

export default Home;
