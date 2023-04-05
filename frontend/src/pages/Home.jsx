import React from "react";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Hero from "../components/Hero";
import Services from "./Services";

function Home() {
	return (
		<>
			<div className="relative z-10">
				<div className="bg-hero-image h-[100vh] w-[100vw] bg-no-repeat bg-cover  -z-20">
					<div className="bg-black inset-0  bg-opacity-70 absolute"></div>
					<Navbar />
					<Hero />
				</div>
			</div>
			<div className="relative z-10 sm:-top-20">
				<About />
				<Services />
			</div>
		</>
	);
}

export default Home;
