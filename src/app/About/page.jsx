import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<div className="min-h-screen">
			<div>
				<div>
					<h2>about us</h2>
				</div>
				<div>
					<Image
						alt="about us"
						height={300}
						width={500}
						src="/images/about.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
