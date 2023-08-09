"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const dashboard = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error, isLoading } = useSWR(
		"https://jsonplaceholder.typicode.com/posts",
		fetcher
	);
	console.log(data);

	return isLoading ? (
		<div className="min-h-screen">
			<Image
				alt="loader"
				height={110}
				width={110}
				src="/loader.svg"
				className=" mx-auto mt-[210px]"
			/>
		</div>
	) : (
		<>
			<div className="min-h-screen">
				<h2>this is dashboard page</h2>
				<div>
					{data && data?.map((item, index) => <p key={index}>{item.title}</p>)}
				</div>
			</div>
		</>
	);
};

export default dashboard;
