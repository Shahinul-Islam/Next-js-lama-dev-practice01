"use client";
import React, { useContext } from "react";
import "./module.dark.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
	const { ToggleData, mode } = useContext(ThemeContext);
	return (
		<button
			title="Toggle Theme"
			onClick={() => ToggleData()}
			className="w-12 h-6 rounded-full p-1 bg-pink-400 
        dark:bg-pink-200 
        relative 
        transition-colors 
        duration-500 
        ease-in
        dark:focus:ring-pink-300 
        focus:border-transparent
      "
		>
			<div
				style={mode === "dark" ? { left: "0px" } : { right: "-29px" }}
				id="toggle"
				className="rounded-full w-4 h-4 bg-pink-200 dark:bg-pink-200 relative 
ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        "
			></div>
		</button>
	);
};

export default DarkModeToggle;
