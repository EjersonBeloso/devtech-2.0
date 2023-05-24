import React from "react";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Hero from "../components/Hero";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Service from "./Service";
import Nav from "../components/Nav";
import ContactUs from "./subPages/ContactUs";

function Home() {
	return (
		<>
			<div className="relative z-10">
				<div className="bg-hero-image h-[100vh] w-[100vw] bg-no-repeat bg-cover  -z-20">
					<div className="bg-black inset-0  bg-opacity-70 absolute"></div>
					<Nav />
					<Hero />
				</div>
			</div>
			<div className="relative z-10 sm:-top-20">
				<About />
				<Services />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default Home;
