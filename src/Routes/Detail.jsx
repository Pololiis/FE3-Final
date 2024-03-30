import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../Context";

const Detail = () => {
	const [dentist, setDentist] = useState({});
	const { theme } = useTheme();
	const { id } = useParams();
	const url = `https://jsonplaceholder.typicode.com/users/${id}`;

	useEffect(() => {
		axios
			.get(url)
			.then((response) => setDentist(response.data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className={theme}>
			{dentist && (
				<>
					<h1>Detail Dentist {id} </h1>
					<table>
						<tbody>
							<tr>
								<td>Name</td>
								<td>E-mail</td>
								<td>Phone</td>
								<td>Website</td>
							</tr>
							<tr>
								<td>{dentist.name}</td>
								<td>{dentist.email}</td>
								<td>{dentist.phone}</td>
								<td>{dentist.website}</td>
							</tr>
						</tbody>
					</table>
				</>
			)}
		</div>
	);
};

export default Detail;
