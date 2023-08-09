"use client";
import React, { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";

const dashboard = async () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setData(data));
		setLoading(false);
		// const getData = async () => {
		// 	setLoading(true);
		// 	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		// 	if (!res.ok) {
		// 		setErr(true);
		// 	}
		// 	setData(res.json());
		// 	setLoading(false);
		// };
		// getData();

		// const myData = await getData();
	}, []);
	console.log(data);

	return (
		<div className="min-h-screen">
			<h2>this is dashboard page</h2>
			<div>
				{data.map((item, index) => {
					<p>{item.title}</p>;
				})}
			</div>
		</div>
	);
};

export default dashboard;
