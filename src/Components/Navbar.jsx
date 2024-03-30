import { Link } from "react-router-dom";
import { useTheme } from "../Context";

const Navbar = () => {
	const { theme, dispatch } = useTheme();

	const handleClick = (e) => {
		e.preventDefault();
		dispatch({ type: "CHANGE_THEME" });
	};

	return (
		<nav className={theme}>
			<div className="navLinks">
				<Link to="/">Home</Link>
				<Link to="/favs">Favs</Link>
				<Link to="/contact">Contact</Link>
			</div>
			<div>
				<button onClick={handleClick} className="themeButton">
					Change theme
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
