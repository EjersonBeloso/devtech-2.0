import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { aboutus, computerRepair1, computerRepair2 } from "../../assets/index";

function AboutUs() {
	return (
		<>
			<section>
				<Navbar />
				<div className="pt-[50px] flex flex-col gap-10 sm:gap-20 sm:max-w-[1280px] sm:mx-auto">
					<div className="bg-white max-w-[95%] flex flex-col justify-center items-center mx-auto sm:flex-row ">
						<div className="sm:w-[55%]">
							<img src={aboutus} alt="about-us-img" />
						</div>
						<div className="sm:w-[45%] sm:p-[50px]">
							<h1 className="text-2xl font-bold text-center ">About Us</h1>
							<hr className="bg-red-500 w-[200px] m-auto h-1 my-2 opacity-50" />
							<p className="text-justify text-gray-600 text-sm leading-relaxed">
								<span className="font-bold pl-4">DevTech Solution</span> is a
								dedicated nonprofit organization committed to making a positive
								impact in the lives of individuals and communities through our
								free computer repair services. With a deep understanding of the
								importance of technology in today's world, we strive to break
								down barriers and ensure equal access to functional and reliable
								computer systems.
							</p>
						</div>
					</div>
					<div className="bg-white max-w-[95%] flex flex-col justify-center items-center mx-auto sm:flex-row gap-4">
						<div className="mt-4 sm:order-last sm:w-[55%]">
							<img src={computerRepair1} alt="computer-img" />
						</div>
						<div className="sm:w-[45%] sm:p-[50px]">
							<h1 className="text-2xl font-bold text-center">Our Mission</h1>
							<hr className="bg-red-500 w-[200px] m-auto h-1 my-2 opacity-50" />
							<p className="text-justify text-gray-600 indent-2 text-sm leading-relaxed">
								To provide accessible and reliable computer repair services free
								of charge to individuals specially students in need. We believe
								that access to technology is essential for personal,
								educational, and professional development in today's digital
								age. Through our services, we strive to empower individuals,
								families, and communities by enabling them to overcome
								technological challenges and fully participate in the digital
								world. By fostering digital literacy and equipping individuals
								with functional computer systems, we aim to enhance their
								educational opportunities, employment prospects, and overall
								quality of life. Together, we are building a more inclusive and
								technologically empowered society, one computer repair at a
								time."
							</p>
						</div>
					</div>
					<div className="bg-white max-w-[95%] flex flex-col justify-center items-center mx-auto sm:flex-row gap-4">
						<div className="mt-4 sm:w-[55%]">
							<img src={computerRepair2} alt="computer-img" />
						</div>
						<div className="sm:w-[45%] sm:p-[50px]">
							<h1 className="text-2xl font-bold text-center">Our Vision</h1>
							<hr className="bg-red-500 w-[200px] m-auto h-1 my-2 opacity-50" />
							<p className="text-justify text-gray-600 indent-2 text-sm leading-relaxed">
								To create a world where everyone has equal access to reliable
								technology and digital resources. We envision a future where
								financial constraints do not limit individuals from harnessing
								the power of technology for personal and professional growth. By
								offering free computer repair services, we strive to bridge the
								digital divide, ensuring that individuals and communities can
								leverage technology to enhance their lives and opportunities.
								Through our efforts, we envision a society where access to
								technology is seen as a fundamental right, enabling individuals
								to thrive, innovate, and contribute to their communities.
								Together, we are transforming lives by empowering individuals
								through the transformative power of technology."
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default AboutUs;
