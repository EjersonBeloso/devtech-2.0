import { useDispatch, useSelector } from "react-redux";

function ServiceDisplay({ service }) {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	return (
		<>
			<div>
				<h1>{service.title}</h1>
				<h1>{service.description}</h1>
				<h1>{service.price}</h1>
			</div>
		</>
	);
}

export default ServiceDisplay;
