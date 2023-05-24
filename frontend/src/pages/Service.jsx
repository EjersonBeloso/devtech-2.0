import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getService } from "../features/service/serviceSlice";
import ServiceDisplay from "../components/ServiceDisplay";
import Nav from "../../src/components/Nav";

function Service() {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { services } = useSelector((state) => state.service);

	useEffect(() => {
		dispatch(getService());
	}, [user]);

	return (
		<>
			<section className="bg-black">
				<Nav />
				<div className="bg-white">
					{services.map((service) => (
						<ServiceDisplay key={service._id} service={service} />
					))}
				</div>
			</section>
		</>
	);
}

export default Service;
