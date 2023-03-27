import axios from "axios";

const API_URL = "http://localhost:5000/api/service/";

//Create Service
const createService = async (serviceData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL, serviceData, config);

	return response.data;
};
//Get Service
const getService = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL, config);

	return response.data;
};

//Delete Service
const deleteService = async (serviceId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.delete(API_URL + serviceId, config);

	return response.data;
};

const serviceService = {
	createService,
	deleteService,
	getService,
};
export default serviceService;
