import Link from "next/link";
import React from "react";

const Navbar = () => {
	const links = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "Portfolio", url: "/Portfolio" },
		{ id: 3, title: "Blog", url: "/Blog" },
		{ id: 4, title: "About", url: "/About" },
		{ id: 5, title: "Dashboard", url: "/dashboard" },
		{ id: 6, title: "Contact", url: "/Contact" },
	];
	return (
		<div className="flex justify-between items-center mx-10 my-6">
			<Link href="/" className="text-3xl font-bold text-pink-500">
				EarnNext
			</Link>
			<div>
				{links.map((link) => (
					<Link className="mx-2 p-1 text-sm" href={link.url} key={link.id}>
						{link.title}
					</Link>
				))}
				<button className="px-3 py-1 bg-pink-500 rounded text-sm text-pink-200">
					Logout
				</button>
			</div>
		</div>
	);
};

export default Navbar;
