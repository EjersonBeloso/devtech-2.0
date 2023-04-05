import React from "react";

function Hero() {
	return (
		<>
			<div className="flex flex-col justify-center items-center  w-full h-full absolute z-10 text-white">
				<h1 className="font-bold text-[5rem]">Repair. Rebuild. Reuse.</h1>
				<p>We provide FREE services to all students.</p>
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
