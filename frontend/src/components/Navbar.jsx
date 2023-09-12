import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
	const [active, setActive] = useState();
	const [toggle, setToggle] = useState();
	return (
		<nav className="bg-black bg-opacity-75 relative z-20 w-full text-white">
			<div className="max-w-[1200px] flex justify-between mx-auto p-3 ">
				<div>
					<Link
						to="/devtech-2.0/home"
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<p className="font-bold">
							Dev<span className="text-red-500">Tech</span>
						</p>
					</Link>
					<Outlet />
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
						} absolute top-[50px] bg-black w-[100vw] h-[100vh]  justify-center inset-0 `}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4  absolute w-[350px]">
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
