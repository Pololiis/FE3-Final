import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useTheme } from "../Context";

const Home = () => {
	const url = "https://jsonplaceholder.typicode.com/users";
	const { theme } = useTheme();
	const [ list, setList ] = useState([]);

	useEffect(() => {
		axios.get(url)
    .then(response => setList(response.data))
    .catch(error => console.error("Error fetching data:", error));
	}, []);

	return (
		<main className={theme} style={{paddingBottom: "2rem"}}>
			<h1>Home</h1>
			<div className="card-grid">
				{list && list.map( dentist => <Card key={dentist.id} item={dentist} />)}
			</div>
		</main>
	);
};

export default Home;
