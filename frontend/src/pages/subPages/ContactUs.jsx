import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../../components/Nav";
import {
	address,
	email,
	phone,
	facebook,
	instagram,
	tweeter,
	youtube,
} from "../../assets";

import { useSelector, useDispatch } from "react-redux";
import { getService } from "../../features/service/serviceSlice";

function ContactUs() {
	//service_m7sfq9h
	//template_fnk4vuj
	//VoZ9L8_fo5kOsTwt5

	const dispatch = useDispatch();
	const { services } = useSelector((state) => state.service);

	useEffect(() => {
		dispatch(getService);
	}, []);

	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
		date: "",
	});

	const [loading, setIsloading] = useState(false);

	const [service, setService] = useState("Windows Installation");

	const [date, setDate] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSelect = (e) => {
		const serviceSelected = e.target.value;
		setService(serviceSelected);
		console.log(serviceSelected);
		console.log(form.service);
	};
	const handleSelectDate = (e) => {
		const dateSelected = e.target.value;
		setDate(dateSelected);
		console.log(dateSelected);
		console.log(date);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsloading(true);

		emailjs
			.send(
				"service_m7sfq9h",
				"template_fnk4vuj",
				{
					from_name: form.name,
					to_name: "Ejerson Beloso",
					from_email: form.email,
					to_email: "belosoejerson@gmail.com",
					message: form.message,
					service: service,
					date: date,
				},
				"VoZ9L8_fo5kOsTwt5"
			)
			.then(() => {
				setIsloading(false);
				alert("Thank you. I will get back to you as soon as possible");

				setForm({
					name: "",
					email: "",
					message: "",
					service: "",
					date: "",
				});
			}),
			(error) => {
				setIsloading(false);
				console.log(error);
				alert("Something went wrong!");
			};
	};

	return (
		//bg-color:#e8e8e8
		<>
			<section className="bg-black flex flex-col ">
				<Nav />

				{/* form section */}
				<div className="bg-[#E8E8E8] order-2 pb-6 flex flex-col justify-center items-center">
					<div className="pt-8 w-[100%] md:w-[680px] ">
						<h2 className="text-[42px] font-bold text-center">Message Us</h2>
						<p className="text-slate-500 text-center">Send us a message!</p>
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="flex flex-col gap-10 pt-8"
						>
							<div className="flex flex-col w-[90%] mx-auto">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									value={form.value}
									onChange={handleChange}
									placeholder="Juan Dela Cruz"
									className="p-2"
									autoFocus
								/>
							</div>
							<div className="flex flex-col w-[90%] mx-auto">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									value={form.email}
									onChange={handleChange}
									placeholder="juandelacruz@sample.com"
									className="p-2"
									required
								/>
							</div>
							<div className="flex flex-col w-[90%] mx-auto">
								<label name="services" className="">
									{" "}
									Select Service:
								</label>
								<select
									name="service"
									id="service"
									value={service}
									onChange={handleSelect}
									className="p-2"
								>
									{services.map((service) => (
										<option>{service.title}</option>
									))}
								</select>
							</div>
							<div className="flex flex-col w-[90%] mx-auto">
								<label htmlFor="date">Select Date and Time:</label>
								<input
									name="service"
									id="service"
									value={date}
									onChange={handleSelectDate}
									type="datetime-local"
									className="p-2"
								/>
							</div>
							<div className="flex flex-col w-[90%] mx-auto">
								<textarea
									name="message"
									id=""
									cols="30"
									rows="10"
									value={form.message}
									onChange={handleChange}
									className="p-6"
									placeholder="Message"
								></textarea>
							</div>

							<div className="mx-auto w-[100px]">
								<button
									type="submit"
									className="p-2 bg-red-600 w-[100px] text-white rounded-md hover:bg-red-400"
								>
									{loading ? "Sending..." : "Send"}
								</button>
							</div>
						</form>
					</div>
				</div>

				{/* Connect Section */}
				<div className=" bg-[#E8E8E8]">
					<div className=" order-1 pt-5 md:grid md:grid-cols-3 md:max-w-[1200px] md:m-auto">
						<div className="leading-8 md:col-span-3 ">
							<h2 className="text-[42px] font-bold text-center">Contact Us</h2>
							<p className="text-center">Connect with us</p>
						</div>
						<div className="flex flex-col gap-4 p-8 pb-12 items-center md:border-r-2 md:border-[#EF4444]">
							<img className="max-w-[30px]" src={phone} alt="phone-img" />
							<h3>Phone</h3>
							<p>+63-998-421-8605</p>
						</div>
						<hr className="h-2 bg-[#EF4444] w-[90%] m-auto md:hidden" />

						<div className="flex flex-col gap-4 p-8 pb-12 items-center md:border-x-2 md:border-[#EF4444]">
							<img className="max-w-[30px]" src={address} alt="phone-img" />
							<h3>Address</h3>
							<p className="text-center">
								Poblacion st, Balibaguhan Mabini Batangas, Philippines
							</p>
						</div>
						<hr className="h-2 bg-[#EF4444] w-[90%] m-auto md:hidden" />

						<div className="flex flex-col gap-4 p-8 pb-12 items-center md:border-l-2 md:border-[#EF4444]">
							<img className="max-w-[30px]" src={email} alt="phone-img" />
							<h3>Email</h3>
							<p className="text-center">belosoejerson@gmail.com</p>
						</div>
					</div>
				</div>

				{/* Google Maps */}
				<div className="order-3 hidden md:block">
					<div className=" bg-[#E8E8E8]">
						<h2 className="text-[42px] font-bold text-center p-4">
							Find us here
						</h2>
					</div>
					<div>
						<iframe
							width="100%"
							height="600"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=QW2R+G5J%20Castillo%20Property,%20Mabini,%20Batangas+(DevTech%20Solution)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						>
							<a href="https://www.maps.ie/distance-area-calculator.html">
								distance maps
							</a>
						</iframe>
					</div>
				</div>

				{/* Contact Footer Section */}
				<div className="bg-[#1B1B2F] order-4 pt-4 md:visible">
					<div className="flex flex-col justify-center items-center leading-7 p-4">
						<h1 className="text-white text-[36px] font-bold">
							Dev<span className="text-[#C32626]">Tech</span>
						</h1>
						<h3 className="text-[#D9D9D9] text-[24px] tracking-widest">
							Solutions
						</h3>
					</div>
					<div>
						<div>
							<h3 className="text-[#d9d9d9] text-center leading-6 text-[16px]">
								Follow us
							</h3>
						</div>
						<div className="flex justify-center items-center gap-10 p-4">
							<div>
								<button
									className="cursor-pointer"
									onClick={() =>
										window.open("https://www.facebook.com/yson03/", "_blank")
									}
								>
									<img
										className="max-w-[30px]"
										src={facebook}
										alt="facebook-img"
									/>
								</button>
							</div>
							<div>
								<button
									className="cursor-pointer"
									onClick={() =>
										window.open("https://www.instagram.com/", "_blank")
									}
								>
									<img
										className="max-w-[30px]"
										src={instagram}
										alt="instagram-img"
									/>
								</button>
							</div>
							<div>
								<button
									className="cursor-pointer"
									onClick={() =>
										window.open("https://www.twitter.com", "_blank")
									}
								>
									<img
										className="max-w-[30px]"
										src={tweeter}
										alt="tweeter-img"
									/>
								</button>
							</div>
							<div>
								<button
									className="cursor-pointer"
									onClick={() =>
										window.open("https://www.youtube.com", "_blank")
									}
								>
									<img
										className="max-w-[30px]"
										src={youtube}
										alt="youtube-img"
									/>
								</button>
							</div>
						</div>
					</div>

					<div className="text-center mt-6 text-[12px] p-4 text-[#d9d9d9]">
						<h4>DevTech &copy; 2023</h4>
					</div>
				</div>
			</section>
		</>
	);
}

export default ContactUs;
