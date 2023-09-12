import { Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./admin/Dashboard";
import Register from "./admin/Register";
import Login from "./admin/Login";
import ServiceForm from "./admin/partials/ServiceForm";
import EditService from "./admin/partials/EditService";
import Edit from "./admin/partials/Edit";
import Home from "./pages/Home";
import AboutUs from "./pages/subPages/AboutUs";
import ContactUs from "./pages/subPages/ContactUs";
import Service from "./pages/Service";

function App() {
	return (
		<>
			<div className="h-[100vh]">
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/register" element={<Register />} />
					<Route path="/admin" element={<Login />} />
					<Route path="/add" element={<ServiceForm />} />
					<Route path="/edit/:id" element={<Edit />} />
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/contact" element={<ContactUs />} />
					<Route path="/service" element={<Service />} />
				</Routes>
				<Outlet />
			</div>

			<ToastContainer />
		</>
	);
}

export default App;
