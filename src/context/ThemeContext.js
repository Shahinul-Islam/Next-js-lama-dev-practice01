"use client";
const { createContext, useState } = require("react");

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState("dark");

	const ToggleData = () => {
		if (mode === "dark") {
			setMode("light");
		} else {
			setMode("dark");
		}
	};
	return (
		<ThemeContext.Provider value={{ ToggleData, mode }}>
			<div className={`theme ${mode}`}>{children}</div>
		</ThemeContext.Provider>
	);
};
