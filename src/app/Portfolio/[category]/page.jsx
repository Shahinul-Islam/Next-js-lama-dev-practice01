import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
	console.log(params);
	return (
		<div className="min-h-screen ml-1">
			<h2 className="text-xl my-4 capitalize">{params.category}</h2>
			<div className="flex items-center justify-center gap-10">
				<div className="max-w-[50%]">
					<h2 className="text-xl font-semibold my-3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						ut rerum fugiat necessitatibus, eos quidem!
					</h2>
					<p className="text-sm mb-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						iusto animi fugit quod eligendi fugiat reiciendis, possimus debitis
						architecto impedit nisi in iure unde quidem dolore temporibus
						consequuntur. Laboriosam, incidunt?
					</p>
					<button className="px-3 py-1 text-sm bg-pink-500 text-pink-200 rounded">
						Contact Now
					</button>
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
			<div className="flex items-center justify-center gap-10 flex-row-reverse mt-16">
				<div className="max-w-[50%]">
					<h2 className="text-xl font-semibold my-3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
						ut rerum fugiat necessitatibus, eos quidem!
					</h2>
					<p className="text-sm mb-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						iusto animi fugit quod eligendi fugiat reiciendis, possimus debitis
						architecto impedit nisi in iure unde quidem dolore temporibus
						consequuntur. Laboriosam, incidunt?
					</p>
					<button className="px-3 py-1 text-sm bg-pink-500 text-pink-200 rounded">
						Contact Now
					</button>
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

export default Category;
