import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
	return (
		<div className="min-h-screen mx-10">
			<div className="grid grid-cols-2 items-center justify-items-center">
				<div>
					<h2 className="text-3xl font font-semibold bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
						About Us
					</h2>
					<p className="my-5 text-[14px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A et
						consectetur magnam odio! Vero exercitationem accusamus cupiditate
						iure, nihil delectus mollitia debitis enim iusto aperiam,
						voluptates, similique expedita culpa provident.
					</p>
					<Link href="/Contact">
						<button className="px-3 py-1 text-sm bg-pink-500 text-pink-200 rounded">
							Contact Us
						</button>
					</Link>
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
			<section className="my-10 grid grid-cols-2 gap-5">
				<div>
					<h2 className="text-2xl font-semibold">Who are we?</h2>
					<p className="text-[14px] mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non
						praesentium aut perferendis voluptatibus impedit architecto, optio
						ipsa sed a.
					</p>
					<p className="text-[14px] mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
						necessitatibus at iste nesciunt? Vitae reprehenderit qui sequi
						doloribus iusto asperiores unde nulla sit quaerat ipsum facilis,
						nobis perspiciatis sunt pariatur repudiandae, dolore illum commodi.
						Possimus autem rerum magni accusantium rem.
					</p>
					<p className="text-[14px] mt-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio
						iusto doloremque veritatis fugit saepe alias sit ratione mollitia
						odit cupiditate assumenda laborum ipsam maxime, natus ad.
						Voluptatibus in illo alias harum cumque molestias officia quos saepe
						provident exercitationem dolorum expedita at, explicabo, cupiditate
						cum. Facilis, reprehenderit laborum iusto quibusdam in id ipsa
						asperiores, quas delectus dicta impedit debitis quaerat.
					</p>
				</div>
				<div>
					<h2 className="text-2xl font-semibold">What we do?</h2>
					<p className="text-[14px] mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non
						praesentium aut perferendis voluptatibus impedit architecto, optio
						ipsa sed a.
					</p>
					<p className="text-[14px] mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
						necessitatibus at iste nesciunt? Vitae reprehenderit qui sequi
						doloribus iusto asperiores unde nulla sit quaerat ipsum facilis,
						nobis perspiciatis sunt pariatur repudiandae, dolore illum commodi.
						Possimus autem rerum magni accusantium rem.
					</p>
					<p className="text-[14px] mt-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio
						iusto doloremque veritatis fugit saepe alias sit ratione mollitia
						odit cupiditate assumenda laborum ipsam maxime, natus ad.
						Voluptatibus in illo alias harum cumque molestias officia quos saepe
						provident exercitationem dolorum expedita at, explicabo, cupiditate
						cum. Facilis, reprehenderit laborum iusto quibusdam in id ipsa
						asperiores, quas delectus dicta impedit debitis quaerat.
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
