import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

//Register admin
const register = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

//Login admin
const login = async (userData) => {
	const response = await axios.post(API_URL + "login", userData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

//logout admin
const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
