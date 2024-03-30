import { useState } from "react";

const Form = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
	});

	const [show, setShow] = useState({
		error: false,
		success: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (nameValidator() && emailValidator()) {
			setShow({
				error: false,
				success: true,
			});
		} else {
			setShow((prevState) => ({
				...prevState,
				error: true,
			}));
		}
	};

	const nameValidator = () => {
		return data.name.length > 5;
	};

	const emailValidator = () => {
		const regexp = new RegExp(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/);
		return regexp.test(data.email);
	};

	return (
		<div>
			{show.success ? (
				<div
					style={{
						textAlign: "center",
						fontWeight: "bolder",
						fontSize: "1.5rem",
						marginTop: "100px"
					}}
				>
					Gracias {data.name}, te contactaremos cuanto antes vía email.
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						id="name"
						onBlur={(e) => setData({ ...data, name: e.target.value })}
					/>
					<label htmlFor="email">E-mail</label>
					<input
						type="text"
						id="email"
						onBlur={(e) => setData({ ...data, email: e.target.value })}
					/>
					<button>Send</button>
				</form>
			)}
			{show.error && (
				<div
					style={{
						color: "red",
						textAlign: "center",
						marginTop: "20px",
						fontWeight: "bolder",
					}}
				>
					Por favor verifique su información nuevamente.
				</div>
			)}
		</div>
	);
};

export default Form;
