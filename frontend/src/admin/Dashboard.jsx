import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Header from "./partials/Header";
import {
	getService,
	getServiceById,
	reset,
} from "../features/service/serviceSlice";
import ServiceItem from "./partials/ServiceItem";

function Dashboard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { services, isLoading, isError, message } = useSelector(
		(state) => state.service
	);
	useEffect(() => {
		dispatch(getService());

		console.log("I rendered");
	}, [user, isError, message, navigate, dispatch]);

	const onClick = () => {
		if (user) {
			navigate("/add");
		} else {
			toast.error("Please Login");
		}
	};

	return (
		<>
			<Header />
			<section className=" mt-[150px] flex flex-col justify-center text-center">
				<h1>
					Welcome{" "}
					<span className="text-[18px] font-bold">{user && user.name}</span>
				</h1>
				<p className="text-[24px] font-semibold">Admin Dashboard</p>
				<button
					className="bg-slate-600 text-white p-1 rounded-sm w-[100px] mx-auto"
					onClick={onClick}
				>
					<i className="fa-solid fa-circle-plus"></i>Add
				</button>
			</section>

			<section className="w-[90%] mx-auto">
				{services.length > 0 ? (
					<div className="w-[95%] m-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
						{services.map((service) => (
							<ServiceItem key={service._id} service={service} />
						))}
					</div>
				) : (
					<h3>Set a service.</h3>
				)}
			</section>
		</>
	);
}

export default Dashboard;
