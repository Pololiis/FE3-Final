import React from "react";
import { useEffect, useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
		axios.get(url)
    .then(response => setList(response.data))
    .catch(error => console.error("Error fetching data:", error));
	}, []);

	return (
		<>
			<h1>Detail Dentist id </h1>
      <h4></h4>
      <h4></h4>
      <h4></h4>
      <h4></h4>
			{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
			{/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
		</>
	);
};

export default Detail;
