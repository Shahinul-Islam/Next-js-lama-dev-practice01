import Image from "next/image";
import React from "react";
import { myData } from "./data";
import { notFound } from "next/navigation";
// console.log(myData);

const getData = (cat) => {
	// console.log(myData);
	const data = myData[cat];
	if (data) {
		return data;
	}
	return notFound();
};

const Category = ({ params }) => {
	// console.log(params);
	const data = getData(params.category);
	// console.log(data);
	return (
		<div className="min-h-screen ml-1">
			<h2 className="text-xl my-4 capitalize">{params.category}</h2>
			<div>
				{data.map((item, index) => (
					<div
						key={index}
						className="flex items-center justify-center gap-10"
						style={
							index % 2 === 0
								? { flexDirection: "row-reverse" }
								: { flexDirection: "row" }
						}
					>
						<div className="max-w-[50%]">
							<h2 className="text-xl font-semibold my-3">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Quisquam ut rerum fugiat necessitatibus, eos quidem!
							</h2>
							<p className="text-sm mb-3">{item.desc}</p>
							<button className="px-3 py-1 text-sm bg-pink-500 text-pink-200 rounded">
								Contact Now
							</button>
						</div>
						<div>
							<Image src={item.image} height={100} width={300} alt="category" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
