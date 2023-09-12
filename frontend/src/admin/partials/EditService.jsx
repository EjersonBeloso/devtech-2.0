import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getServiceById,
	editService,
	reset,
} from "../../features/service/serviceSlice";

function EditService() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { services, isLoading, isError, message } = useSelector(
		(state) => state.service
	);

	const { id } = useParams();

	const [service, setService] = useState({
		_id: id,
		title: "",
		description: "",
		image: "",
		price: "",
	});
	const { title, description, image, price } = service;
	console.log(service);

	const [serviceData, setServiceData] = useState({
		title: services.title,
		description: services.description,
		image: services.image,
		price: services.price,
	});

	console.log(serviceData);

	useEffect(() => {
		dispatch(getServiceById(id));
		serviceData;

		console.log(services.title);
	}, [id]);

	const onChange = (e) => {
		service;
		setService((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
		console.log("onchange");
		console.log(e.target.name, e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const formData = {
			user: services.user,
			title: service.title,
			description: service.description,
			price: service.price,
			image: service.image,
		};
		console.log(formData);

		dispatch(editService(id, formData));
		dispatch(reset());
	};

	return (
		<section className="max-w-[700px] flex flex-col justify-center items-center mx-auto bg-slate-200 p-8 mt-32">
			<form onSubmit={onSubmit} className="flex flex-col w-full">
				<h2 className="text-2xl font-bold text-center mb-6 border-b-2 border-slate-300 pb-4">
					Services
				</h2>
				<div className="flex-col flex gap-4">
					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Title:</label>
						<input
							type="text"
							name="title"
							id="title"
							value={title}
							onChange={onChange}
							placeholder={services.title}
							className="p-2 rounded-md"
						/>
					</div>
					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Description:</label>
						<input
							type="text"
							name="description"
							id="description"
							value={description}
							onChange={onChange}
							placeholder={services.description}
							className="p-2 rounded-md"
						/>
					</div>

					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Price:</label>
						<input
							type="text"
							name="price"
							id="price"
							value={price}
							onChange={onChange}
							placeholder={services.price}
							className="p-2 rounded-md"
						/>
					</div>
					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Image:</label>
						<input
							type="text"
							name="image"
							id="image"
							value={image}
							onChange={onChange}
							placeholder={services.image}
							className="p-2 rounded-md"
						/>
					</div>
					<button
						type="submit"
						onClick={onSubmit}
						className="w-[200px] p-2 items-center bg-red-500 text-white mx-auto rounded-md hover:bg-red-700"
					>
						Submit
					</button>
					<Link
						className="w-[200px] p-2 items-center bg-blue-500 text-white mx-auto rounded-md hover:bg-red-700"
						onClick={() => navigate("/devtech-2.0/dashboard")}
					>
						to Dashboard
					</Link>
					<Outlet />
				</div>
			</form>
		</section>
	);
}

export default EditService;
