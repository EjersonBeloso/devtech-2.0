import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getService } from "../features/service/serviceSlice";
import ServiceDisplay from "../components/ServiceDisplay";
import Nav from "../../src/components/Nav";
import Footer from "../../src/components/Footer";

function Service() {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { services } = useSelector((state) => state.service);

	useEffect(() => {
		dispatch(getService());
	}, [user]);

	return (
		<>
			<section className="bg-[#d9d9d9]">
				<Nav />
				<div className="bg-[#d9d9d9] max-w-[1250px] m-auto h-full">
					<div>
						<h1 className="text-[40px] font-bold text-center p-12">Services</h1>
					</div>
					<div className="bg-[#d9d9d9] w-[95%] m-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
						{services.map((service) => (
							<ServiceDisplay key={service._id} service={service} />
						))}
					</div>
				</div>
				<Footer />
			</section>
		</>
	);
}

export default Service;
