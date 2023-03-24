import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./admin/Dashboard";
import Register from "./admin/Register";
import Login from "./admin/Login";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/register" element={<Register />} />
				<Route path="/admin" element={<Login />} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
