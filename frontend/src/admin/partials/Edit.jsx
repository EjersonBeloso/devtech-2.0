import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		title: "",
		description: "",
		image: "",
		price: "",
	});

	const onChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const [service, setService] = useState();
	const id = useParams().id;

	//Getting the Service by id
	const fetchDetails = async () => {
		const response = await axios
			.get(`http://localhost:5000/api/service/${id}`)
			.catch((err) => console.log(err));
		const data = await response.data;
		return data;
	};

	//Updating the Service
	const sendRequest = async () => {
		const response = await axios
			.put(`http://localhost:5000/api/service/${id}`, {
				title: inputs.title,
				description: inputs.description,
				image: inputs.image,
				price: inputs.price,
			})
			.catch((err) => console.log(err));

		const data = response.data;
		console.log(data);
		return data;
	};

	useEffect(() => {
		fetchDetails().then((data) => {
			setService(data);
			setInputs({
				title: data.title,
				description: data.description,
				image: data.image,
				price: data.price,
			});
		});
	}, [id]);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
		sendRequest()
			.then((data) => console.log(data))
			.then(() => navigate("/"));
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
							value={inputs.title}
							onChange={onChange}
							className="p-2 rounded-md"
						/>
					</div>
					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Description:</label>
						<input
							type="text"
							name="description"
							id="description"
							value={inputs.description}
							onChange={onChange}
							className="p-2 rounded-md"
						/>
					</div>

					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Price:</label>
						<input
							type="text"
							name="price"
							id="price"
							value={inputs.price}
							onChange={onChange}
							className="p-2 rounded-md"
						/>
					</div>
					<div className=" flex flex-col gap-2">
						<label className="text-[20px]">Image:</label>
						<input
							type="text"
							name="image"
							id="image"
							value={inputs.image}
							onChange={onChange}
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
					<button
						className="w-[200px] p-2 items-center bg-blue-500 text-white mx-auto rounded-md hover:bg-red-700"
						onClick={() => navigate("/dashboard")}
					>
						to Dashboard
					</button>
				</div>
			</form>
		</section>
	);
}

export default Edit;
