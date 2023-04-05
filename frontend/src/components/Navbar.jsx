import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
	const [active, setActive] = useState();
	const [toggle, setToggle] = useState();
	return (
		<nav className="bg-black bg-opacity-75 relative z-20 w-full text-white">
			<div className="max-w-[1200px] flex justify-between mx-auto p-3 ">
				<div>
					<Link
						to="/home"
						className="leading-none"
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<p className="font-bold leading-none">
							Dev<span className="text-red-500">Tech</span>
						</p>
						<p>Solutions</p>
					</Link>
				</div>
				<ul className="list-none hidden sm:flex flex-row">
					<li className="my-1 mx-3 text-sm">
						<a href="#">Home</a>
					</li>
					<li className="my-1 mx-3 text-sm">
						<a href="#">About us</a>
					</li>
					<li className="my-1 mx-3  text-sm">
						<a href="#">Services</a>
					</li>
					<li className="my-1 mx-3 text-sm">
						<a href="#">Contact</a>
					</li>
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					{toggle ? (
						<i
							className="fa-solid fa-xmark cursor-pointer"
							onClick={() => setToggle(!toggle)}
						></i>
					) : (
						<i
							className="fa-solid fa-bars cursor-pointer"
							onClick={() => setToggle(!toggle)}
						></i>
					)}

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 bg-slate-400 absolute top-10 right-0 mx-4 my-2 min-w-[140px] z- ease-in duration-300`}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4  ">
							<li className="my-1 mx-3 text-sm">
								<a href="#">Home</a>
							</li>
							<li className="my-1 mx-3 text-sm">
								<a href="#">About us</a>
							</li>
							<li className="my-1 mx-3  text-sm">
								<a href="#">Services</a>
							</li>
							<li className="my-1 mx-3 text-sm">
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
