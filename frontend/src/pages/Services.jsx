import React from "react";
import { Link } from "react-router-dom";
import { window2 } from "../assets";

function Services() {
	return (
		<section className="bg-[#27374D] py-[100px]  ">
			<div className="flex flex-col gap-4 justify-center items-center sm:max-w-[1280px] w-auto md:mx-auto mx-4">
				<div className="text-center">
					<h4 className="text-red-500 font-semibold">WHAT YOU GET FROM US</h4>
					<h2 className="text-[42px] font-bold text-white">Our Services</h2>
				</div>

				<div className="flex sm:flex-row flex-col justify-between gap-4 px-4">
					<Link>
						<div
							className="bg-white px-3 py-10 flex flex-col gap-4 justify-center items-center hover:bg-red-300 hover:duration-500"
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<img src={window2} alt="" className="w-[80px]" />
							<h3 className="text-[24px] font-bold">Laptop</h3>
							<p className="text-gray-500 text-center">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
								debitis facere consequatur aliquam at quo necessitatibus culpa
								voluptatibus maiores ab!
							</p>
						</div>
					</Link>

					<div
						className="bg-white px-3 py-10 flex flex-col gap-4 justify-center items-center hover:bg-red-300 duration-500"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="200"
					>
						<img src={window2} alt="" className="w-[80px]" />
						<h3 className="text-[24px] font-bold">Desktop</h3>
						<p className="text-gray-500 text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
							debitis facere consequatur aliquam at quo necessitatibus culpa
							voluptatibus maiores ab!
						</p>
					</div>
					<div
						className="bg-white px-3 py-10 flex flex-col gap-4 justify-center items-center  hover:bg-red-300 duration-500"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="400"
					>
						<img src={window2} alt="" className="w-[80px]" />
						<h3 className="text-[24px] font-bold">All in one PC</h3>
						<p className="text-gray-500 text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
							debitis facere consequatur aliquam at quo necessitatibus culpa
							voluptatibus maiores ab!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
