import React from "react";
import { Link } from "react-router-dom";
import {
	address,
	email,
	phone,
	facebook,
	instagram,
	tweeter,
	youtube,
} from "../assets";

function Footer() {
	return (
		<section className="bg-[#183153] text-white p-2 py-12 mt-[50px]">
			<Link
				to="/"
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				<div className="flex flex-col justify-center items-center leading-7 p-4">
					<h1 className="text-white text-[36px] font-bold">
						Dev<span className="text-[#EF4444]">Tech</span>
					</h1>
					<h3 className="text-[#D9D9D9] text-[24px] tracking-widest">
						Solutions
					</h3>
				</div>
			</Link>

			<div className="flex flex-col gap-4 justify-center items-center sm:max-w-[1200px] sm:flex-row mx-auto sm:justify-around">
				<div className="">
					<h3 className=" font-bold text-center">Contact Us</h3>
					<div className="mt-2">
						<div className="flex flex-row gap-1">
							<img src={address} alt="" className="w-[20px]" />
							<p className="text-[12px] my-auto text-slate-200">
								Poblacion Mabini, Batangas Philippines
							</p>
						</div>
						<div className="flex flex-row gap-1">
							<img src={email} alt="" className="w-[20px]" />
							<p className="text-[12px] my-auto text-slate-200">
								belosoejerson@gmail.com
							</p>
						</div>
						<div className="flex flex-row gap-1">
							<img src={phone} alt="" className="w-[20px]" />
							<p className="text-[12px] text-slate-200 my-auto">
								+63 998 421 8605
							</p>
						</div>
					</div>
				</div>
				<div>
					<h3 className="font-bold text-center ">Follow Us</h3>
					<div className="flex flex-row gap-6 mt-2">
						<buttton
							className="cursor-pointer"
							onClick={() =>
								window.open("https://www.facebook.com/yson03/", "_blank")
							}
						>
							<img className="w-[30px]" src={facebook} alt="facebook-img" />
						</buttton>
						<buttton
							className="cursor-pointer"
							onClick={() =>
								window.open("https://www.instagram.com/", "_blank")
							}
						>
							<img className="w-[30px]" src={instagram} alt="instagram-img" />
						</buttton>
						<buttton
							className="cursor-pointer"
							onClick={() => window.open("https://twitter.com/", "_blank")}
						>
							<img className="w-[30px]" src={tweeter} alt="tweeter-img" />
						</buttton>
						<buttton
							className="cursor-pointer"
							onClick={() => window.open("https://youtube.com", "_blank")}
						>
							<img className="w-[30px]" src={youtube} alt="youtube-img" />
						</buttton>
					</div>
				</div>
			</div>
			<div className="text-center mt-6 text-[12px]">
				<h4>DevTech &copy; 2023</h4>
			</div>
		</section>
	);
}

export default Footer;
