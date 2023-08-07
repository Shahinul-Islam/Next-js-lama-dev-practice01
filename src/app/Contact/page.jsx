import Image from "next/image";
import React from "react";
import "./page.modul.css";

const Contact = () => {
	return (
		<div className="min-h-screen mx-10">
			<h2 className="text-center my-10 text-3xl font-semibold bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
				Let's Keep in Touch
			</h2>
			<section className="grid grid-cols-2 gap-2 justify-center items-center">
				<div>
					<Image
						src="/images/contact.png"
						width={500}
						height={400}
						alt="contact us"
						id="contact-image"
					/>
				</div>
				<div>
					<form class="bg-gradient-to-r from-pink-50 to-pink-100 rounded p-4 mb-4">
						<div class="mb-4">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="name"
							>
								Name
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline bg-transparent"
								id="name"
								type="text"
								placeholder="name"
							/>
						</div>
						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="email"
							>
								Email
							</label>
							<input
								class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline bg-transparent"
								id="email"
								type="email"
								placeholder="email"
							/>
						</div>
						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="message"
							>
								Message
							</label>
							<textarea
								class="shadow appearance-none border focus:border-pink-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
								id="message"
								type="message"
								placeholder="message"
								rows={6}
							/>
						</div>
						<button
							type="submit"
							className="px-3 py-1 text-sm bg-pink-500 text-pink-200 rounded"
						>
							Contact Now
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Contact;
