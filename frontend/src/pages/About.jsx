import React from "react";
import {
	window1,
	window2,
	window3,
	hardware1,
	hardware2,
	hardware3,
	fast1,
	fast2,
	aboutPageImage,
} from "../assets";

function Features() {
	return (
		<div className="sm:flex sm:bottom-10 max-w-[1200px] mx-auto justify-between">
			<div className="bg-white m-4 shadow-2xl p-3 w-[350px] flex flex-col justify-center items-center text-center gap-4">
				<img src={window3} className="w-[50px]" alt="icon" />
				<h2 className="font-bold text-[24px]">OS Installation</h2>
			</div>
			<div className="bg-white m-4 shadow-2xl p-3 w-[350px] flex flex-col justify-center items-center text-center gap-4">
				<img src={hardware3} className="w-[50px]" alt="icon" />
				<h2 className="font-bold text-[24px]">Hardware Repair</h2>
			</div>
			<div className="bg-white m-4 shadow-2xl p-3 w-[350px] flex flex-col justify-center items-center text-center gap-4">
				<img src={fast2} className="w-[50px]" alt="icon" />
				<h2 className="font-bold text-[24px]">Fast Service</h2>
			</div>
		</div>
	);
}

function About() {
	//Accent-color: #FA5252
	return (
		<>
			<Features />
			<section className="sm:flex sm:bottom-10 max-w-[1200px] mx-auto pb-[80px] p-4 justify-between">
				<div className="sm:w-[50%]  flex flex-col  justify-center items-left max-[640px]:items-center gap-6  order-last">
					<h4 className="text-red-500 font-semibold">THE DEVTECH</h4>
					<h2 className="text-[42px] font-bold">About us</h2>
					<p className=" text-justify indent-8">
						DevTech Solutions is an Information Technology Company who is
						willing to help everyone, especially on students to fix or
						troubleshoot or even repair their computer devices. Their Computer
						Services are 100% Free for everyone.
					</p>
				</div>
				<div className="sm:w-[50%] m-20 md:block hidden mr-4 order-first">
					<div className="border-red-500 border-8 w-[400px] h-[600px] absolute invisible lg:visible  top-[200px] "></div>
					<div className="">
						<img
							src={aboutPageImage}
							className="w-[400px] h-[600px] object-cover object-right relative right-[50px] shadow-2xl"
							alt="about-image"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
