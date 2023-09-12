import React from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import Dashboard from "./admin/Dashboard";
import Register from "./admin/Register";
import ServiceForm from "./admin/partials/ServiceForm";
import Edit from "./admin/partials/Edit";
import AboutUs from "./pages/subPages/AboutUs";
import Home from "./pages/Home";
import Login from "./admin/Login";
import ContactUs from "./pages/subPages/ContactUs";
import Service from "./pages/Service";

const router = createBrowserRouter([
	{
		path: "/devtech-2.0/",
		element: <App />,
		children: [
			{
				path: "/devtech-2.0/",
				element: <Home />,
			},
			{
				path: "/devtech-2.0/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/devtech-2.0/register",
				element: <Register />,
			},
			{
				path: "/devtech-2.0/admin",
				element: <Login />,
			},
			{
				path: "/devtech-2.0/add",
				element: <ServiceForm />,
			},
			{
				path: "/devtech-2.0/edit/:id",
				element: <Edit />,
			},
			{
				path: "/devtech-2.0/about",
				element: <AboutUs />,
			},
			{
				path: "/devtech-2.0/contact",
				element: <ContactUs />,
			},
			{
				path: "/devtech-2.0/service",
				element: <Service />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
