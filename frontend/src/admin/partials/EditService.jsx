import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

	const [service, setService] = useState();
	const [serviceData, setServiceData] = useState({
		title: services.title,
		description: services.description,
		image: services.image,
		price: services.price,
	});

	const { title, description, price, image } = serviceData;
	console.log(serviceData);

	useEffect(() => {
		dispatch(getServiceById(id));
		serviceData;

		console.log("I rendered");
	}, [id]);

	const onSubmit = (e) => {
		e.preventDefault();

		const formData = {
			title,
			description,
			price,
			image,
		};

		dispatch(editService(id, formData));
		return () => {
			dispatch(reset());
		};
	};
	const onChange = (e) => {
		setServiceData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
		console.log("onchange");
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
							placeholder="Enter Title"
							className="p-2 rounded-md"
						/>
					</div>
					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Description:</label>
						<input
							type="text"
							name="description"
							id="desciption"
							value={description}
							onChange={onChange}
							placeholder="Enter Description"
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
							placeholder="Enter Price"
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
							className="p-2 rounded-md"
						/>
					</div>
					<button
						type="submit"
						className="w-[200px] p-2 items-center bg-red-500 text-white mx-auto rounded-md hover:bg-red-700"
					>
						Submit
					</button>
					<button
						className="w-[200px] p-2 items-center bg-blue-500 text-white mx-auto rounded-md hover:bg-red-700"
						onClick={() => navigate("/")}
					>
						to Dashboard
					</button>
				</div>
			</form>
		</section>
	);
}

export default EditService;
