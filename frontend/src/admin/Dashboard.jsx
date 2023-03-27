import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./partials/Header";
import ServiceForm from "./partials/ServiceForm";
import { getService, reset } from "../features/service/serviceSlice";
import ServiceItem from "./partials/ServiceItem";

function Dashboard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { services, isLoading, isError, message } = useSelector(
		(state) => state.service
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		if (!user) {
			navigate("/admin");
		}
		dispatch(getService());
		return () => {
			dispatch(reset());
		};
	}, [user, navigate, isError, message, dispatch]);

	return (
		<>
			<Header />
			<section className=" mt-[150px] flex flex-col justify-center text-center">
				<h1>Welcome {user && user.name}</h1>
				<p>Admin Dashboard</p>
			</section>

			<ServiceForm />

			<section>
				{services.length > 0 ? (
					<div>
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
