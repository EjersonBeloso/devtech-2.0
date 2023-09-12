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
					<Route path="/devtech-2.0/dashboard" element={<Dashboard />} />
					<Route path="/devtech-2.0/register" element={<Register />} />
					<Route path="/devtech-2.0/admin" element={<Login />} />
					<Route path="/devtech-2.0/add" element={<ServiceForm />} />
					<Route path="/devtech-2.0/edit/:id" element={<Edit />} />
					<Route path="/devtech-2.0/" element={<Home />} />
					<Route path="/devtech-2.0/about" element={<AboutUs />} />
					<Route path="/devtech-2.0/contact" element={<ContactUs />} />
					<Route path="/devtech-2.0/service" element={<Service />} />
				</Routes>
				<Outlet />
			</div>

			<ToastContainer />
		</>
	);
}

export default App;
