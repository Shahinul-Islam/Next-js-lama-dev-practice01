import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

const BlogPost = async ({ params }) => {
	// console.log(params);
	const singleData = async () => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${params["id"]}`
		);
		if (!res.ok) {
			return notFound();
		}
		return res.json();
	};

	const singlePost = await singleData();
	return (
		<div className="min-h-screen mx-10">
			<h2>Blog Post {singlePost.id}</h2>
			<div className="flex items-center justify-center gap-10 flex-row-reverse mt-16">
				<div className="max-w-[50%]">
					<h2 className="text-xl font-semibold my-3">{singlePost.title}</h2>
					<p className="text-sm mb-3">{singlePost.body}</p>
					<Link href="/Contact">
						<button className="px-3 py-1 text-sm bg-pink-500 text-pink-200 rounded">
							Contact Now
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
		</div>
	);
};

export default BlogPost;
