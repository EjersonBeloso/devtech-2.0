import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

function ContactUs() {
	//service_m7sfq9h
	//template_fnk4vuj
	//VoZ9L8_fo5kOsTwt5
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
			<section className="bg-black">
				<Nav />
				<div className="bg-[#E8E8E8] h-[100vh]">
					<div>
						<h2 className="text-[42px] font-bold text-center">Get in touch</h2>
						<p className="text-slate-500 text-center">Send us a message!</p>
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="flex flex-col gap-10"
						>
							<div className="flex flex-col w-[90%] mx-auto">
								<label htmlFor="name">Name:</label>
								<input
									type="text"
									name="name"
									id="name"
									value={form.value}
									onChange={handleChange}
									className="border-black border-b-2 bg-[#E8E8E8]"
								/>
							</div>
							<div className="flex flex-col w-[90%] mx-auto">
								<label htmlFor="email">Email:</label>
								<input
									type="email"
									name="email"
									id="email"
									value={form.email}
									onChange={handleChange}
									className="border-black border-b-2 bg-[#E8E8E8]"
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
									className="border-black border-b-2 bg-[#E8E8E8]"
								>
									<option value="Windows installation">
										Windows Installation
									</option>
									<option value="Reformat">Reformat</option>
									<option value="HDD & SSD installation">
										HDD $ SSD installation
									</option>
									<option value="Hardware Repair">Hardware Repair</option>
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
									className="border-black border-b-2 bg-[#E8E8E8]"
								/>
							</div>
							<div className="flex flex-col w-[90%] mx-auto">
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id=""
									cols="30"
									rows="10"
									value={form.message}
									onChange={handleChange}
									className="border-black border-b-2 bg-[#E8E8E8]"
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
				<Footer />
			</section>
		</>
	);
}

export default ContactUs;
