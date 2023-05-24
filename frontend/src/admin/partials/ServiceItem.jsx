import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteService,
	getService,
	reset,
} from "../../features/service/serviceSlice";
import EditService from "./EditService";

function ServiceItem({ service }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);
	console.log(service);

	const onDelete = () => {
		dispatch(deleteService(service._id));

		dispatch(getService());
		dispatch(reset());
		console.log("deleted");
	};

	const onEdit = () => navigate(`/edit/${service._id}`);

	return (
		<>
			<div className="max-w-[450px] bg-slate-200 p-4 m-4">
				<div className="h-[300px] ">
					<img
						src={service.image}
						className="max-w-[300px]  mx-auto object-cover"
						alt="service-image"
					/>
				</div>
				<div>
					<h1>{service.title}</h1>
					<h3>Description</h3>
					<p>{service.description}</p>
					<h3>Price</h3>
					<p>{service.price}</p>
					<h3>Type</h3>
					<p>{service.type}</p>
					<div className={user ? "flex" : "hidden"}>
						<button
							onClick={onEdit}
							className="w-[75px] bg-blue-600 text-white p-2 m-2 hover:bg-white hover:border-blue-500 border-2 hover:text-black"
						>
							Edit
						</button>
						<button
							onClick={onDelete}
							className="w-[75px] bg-red-600 text-white p-2 m-2 hover:bg-white hover:border-red-500 border-2 hover:text-black"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiceItem;
