import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

const getData = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	if (!response.ok) {
		return notFound();
	}
	return response.json();
};

const Blog = async () => {
	const data = await getData();
	return (
		<div className="min-h-screen mx-10">
			<h2 className="text-3xl font font-semibold bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
				Blog
			</h2>
			<div>
				{data.map((item, index) => (
					<div
						style={
							index % 2 === 0
								? { flexDirection: "row" }
								: { flexDirection: "row-reverse" }
						}
						key={index}
						className="border-2 border-pink-400 shadow-md rounded-lg p-5 flex items-center justify-center gap-10  mt-5"
					>
						<div className="max-w-[65%]">
							<h2 className="text-xl font-semibold my-3">{item.title}</h2>
							<p className="text-sm mb-3">{item.body}</p>
							<Link href={`/Blog/${item.id}`}>
								<button className="px-3 py-2 text-sm bg-pink-500 text-pink-200 rounded">
									Read More
								</button>
							</Link>
						</div>
						<div>
							<Image
								src="/images/portfolio/category.jpg"
								height={400}
								width={500}
								alt="category"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
