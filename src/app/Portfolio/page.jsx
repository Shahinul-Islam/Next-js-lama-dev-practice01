import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
	return (
		<div className="min-h-screen">
			{/* <h2>this is Portfolio page</h2> */}
			<h2>Choose from gallery</h2>
			<div>
				<Link href="/Portfolio/illustrations">
					<div>
						<Image alt="illustrations" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
