import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ServiceDisplay({ service }) {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	return (
		<>
			<section className="bg-white shadow-lg rounded-md hover:scale-105 transition duration-300 ease-in-out ">
				<div className="flex flex-col justify-around">
					<div className="bg-[#1B1B2F] relative w-full">
						<img
							src={service.image}
							alt="service-image"
							className="object-cover mix-blend-luminosity hover:mix-blend-normal overflow-hidden h-[300px]"
						/>
					</div>

					<div className="p-4 flex flex-col justify-around gap-3">
						<div>
							<h2 className="font-bold text-[18px] h-[50px]">
								{service.title}
							</h2>
						</div>
						<div>
							<p className="text-justify h-[100px] leading-5">
								{service.description}
							</p>
						</div>
						<div>
							<h4 className="text-[20px] font-bold">{service.price}</h4>
						</div>
						<div className="">
							<Link to="/contact">
								<button className="bg-[#EF4444] p-2 text-white rounded-md">
									Book now
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ServiceDisplay;
