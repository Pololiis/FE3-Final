const reducer = (themeState, action) => {
	switch (action.type) {
		case "CHANGE_THEME":
			return themeState === "dark" ? "" : "dark";
		default:
			return themeState;
	}
};
