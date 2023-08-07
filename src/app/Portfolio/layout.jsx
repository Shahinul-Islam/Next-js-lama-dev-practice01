import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen mx-10">
			<h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
				Our Works
			</h2>
			{children}
		</div>
	);
};

export default Layout;
