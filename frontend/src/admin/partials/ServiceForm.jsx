import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createService, reset } from "../../features/service/serviceSlice";

function ServiceForm() {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		price: "",
		image: "",
		type: "",
	});

	const { title, description, image, price, type } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		const serviceData = {
			title,
			description,
			image,
			price,
			type,
		};

		dispatch(createService(serviceData));
		navigate("/devtech-2.0/dashboard");
	};
	const onChange = (e) => {
		setFormData((prevState) => ({
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
							placeholder="Enter Service"
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
					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Type:</label>
						<input
							type="text"
							name="type"
							id="type"
							value={type}
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
						onClick={() => navigate("/devtech-2.0/dashboard")}
					>
						to Dashboard
					</button>
					<Outlet />
				</div>
			</form>
		</section>
	);
}

export default ServiceForm;
