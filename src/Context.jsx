import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const reducer = (themeState, action) => {
		switch (action.type) {
			case "CHANGE_THEME":
				return themeState === "dark" ? "" : "dark";
			default:
				return themeState;
		}
	};

	const [theme, dispatch] = useReducer(reducer, "");

	return (
		<ThemeContext.Provider value={{ theme, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
