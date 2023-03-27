import { useDispatch } from "react-redux";
import { deleteService } from "../../features/service/serviceSlice";

function ServiceItem({ service }) {
	const dispatch = useDispatch();

	return (
		<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div className="md:flex">
				<div className="md:flex-shrink-0">
					<img
						className="h-48 w-full object-cover md:w-48"
						src={service.image}
						alt="card image"
					/>
				</div>

				<div className="p-8">
					<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
						{service.title}
					</div>
					<a
						href="#"
						className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
					></a>
					<h2>Desciption</h2>
					<p className="mt-2 text-gray-500">{service.description}</p>
					<h2>Price</h2>
					<p className="mt-2 text-gray-500">{service.price}</p>
				</div>
			</div>
		</div>
	);
}

export default ServiceItem;
