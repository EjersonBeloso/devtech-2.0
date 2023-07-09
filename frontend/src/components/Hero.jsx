import React from "react";

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
					<button className="p-2 border-2 border-rose-600 hover:bg-red-600 hover:ease-in-out hover:duration-300">
						Learn more
					</button>
					<button className="p-2 bg-red-600 w-[100px] hover:border-red-600 hover:border-2 hover:bg-transparent  ">
						Service
					</button>
				</div>
			</div>
		</>
	);
}

export default Hero;
