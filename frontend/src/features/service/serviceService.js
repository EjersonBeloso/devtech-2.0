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
const getService = async () => {
	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// };

	const response = await axios.get(API_URL + "all");

	return response.data;
};
const getServiceById = async (serviceId) => {
	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// };

	const response = await axios.get(API_URL + serviceId);

	return response.data;
};

//Edit Service
const editService = async (serviceId, serviceData) => {
	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// };
	const response = await axios.put(API_URL + serviceId, serviceData);

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
	editService,
	getService,
	getServiceById,
};
export default serviceService;
