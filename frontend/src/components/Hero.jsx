import React from "react";
import { Link, Outlet } from "react-router-dom";

function Hero() {
	return (
		<>
			<div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] absolute z-10 text-white m-auto">
				<h1 className="text-[5rem] text-center font-bold">
					Repair. Rebuild. Reuse.
				</h1>
				<p className="text-sm text-gray-200">
					We provide FREE consultations to all students.
				</p>
				<div className="flex gap-8 mt-12">
					<Link to="/devtech-2.0/about">
						<button className="p-2 border-2 border-rose-600 hover:bg-red-600 hover:ease-in-out hover:duration-300">
							Learn more
						</button>
					</Link>

					<Link to="/devtech-2.0/service">
						<button className="p-2 bg-red-600 w-[100px] hover:border-red-600 hover:border-2 hover:bg-transparent  ">
							Service
						</button>
					</Link>

					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Hero;
