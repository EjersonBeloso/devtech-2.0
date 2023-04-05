import { Route, Routes, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./admin/Dashboard";
import Register from "./admin/Register";
import Login from "./admin/Login";
import ServiceForm from "./admin/partials/ServiceForm";
import EditService from "./admin/partials/EditService";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/register" element={<Register />} />
					<Route path="/admin" element={<Login />} />
					<Route path="/add" element={<ServiceForm />} />
					<Route path="/edit/:id" element={<EditService />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</div>

			<ToastContainer />
		</>
	);
}

export default App;
