import Image from "next/image";

export default function Home() {
	return (
		<main className=" min-h-screen mx-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10 justify-center">
				<div>
					<h1 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					</h1>
					<p className="my-5">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quod
						quis nesciunt enim ex inventore vel dicta exercitationem. Iusto,
						fugit quod. Placeat, iusto assumenda! Nulla accusamus ipsum a!
						Laudantium nam exercitationem, quae dolorum et fugit!
					</p>
					<button className="px-3 py-1 text-sm bg-pink-500 text-pink-200 rounded">
						Our Works
					</button>
				</div>
				<div>
					<Image
						src="/images/hero.png"
						alt="hero image"
						width={500}
						height={270}
					/>
				</div>
			</div>
		</main>
	);
}
