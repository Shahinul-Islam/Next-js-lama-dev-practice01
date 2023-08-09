import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
	return (
		<div className="min-h-screen">
			{/* <h2>this is Portfolio page</h2> */}
			<h2 className="my-5">Choose from gallery</h2>
			<div className="grid grid-cols-3 gap-4">
				<Link href="/Portfolio/illustrations">
					<div className="relative">
						<Image
							className="border-4 border-slate-400"
							alt="illustrations"
							src="/images/portfolio/illustration.png"
							height={300}
							width={300}
						/>
						<p className="absolute bottom-3 right-[200px]  text-slate-200 text-xl font-semibold hover:text-pink-400">
							Illustrations
						</p>
					</div>
				</Link>
				<Link href="/Portfolio/websites">
					<div className="relative">
						<Image
							className="border-4 border-slate-400 h-[300px]"
							alt="illustrations"
							src="/images/portfolio/websites.jpg"
							height={300}
							width={300}
						/>
						<p className="absolute bottom-3 right-[200px]  text-slate-200 text-xl font-semibold hover:text-pink-400">
							Websites
						</p>
					</div>
				</Link>
				<Link href="/Portfolio/applications">
					<div className="relative">
						<Image
							className="border-4 border-slate-400 h-[300px]"
							alt="illustrations"
							src="/images/portfolio/apps.jpg"
							height={300}
							width={300}
						/>
						<p className="absolute bottom-3 right-[200px]  text-slate-200 text-xl font-semibold hover:text-pink-400">
							Applications
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
