import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
	//service_m7sfq9h
	//template_fnk4vuj
	//VoZ9L8_fo5kOsTwt5
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setIsloading] = useState(false);

	const [service, setService] = useState("Windows Installation");

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
				});
			}),
			(error) => {
				setIsloading(false);
				console.log(error);
				alert("Something went wrong!");
			};
	};

	return (
		<section className="pt-4">
			<div>
				<div className=" mx-auto p-4 w-[95%] sm:max-w-[1280px] bg-slate-200 relative shadow-xl flex sm:flex-row flex-col  gap-4">
					<div className="sm:w-[50%] w-[100%]">
						<h2 className="text-[42px] font-bold text-center">Get in touch</h2>
						<p className="text-slate-500 text-center">Send us a message!</p>
						<form ref={formRef} onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Name"
								name="name"
								id="name"
								value={form.value}
								onChange={handleChange}
								className="p-2 w-[100%] rounded bg-slate-100 my-2"
							/>
							<input
								type="email"
								placeholder="Email"
								name="email"
								id="email"
								value={form.email}
								onChange={handleChange}
								className="p-2 w-[100%] rounded bg-slate-100 my-2"
								required
							/>
							<label name="services" className="">
								{" "}
								Select Service:
							</label>
							<select
								name="service"
								id="service"
								value={service}
								onChange={handleSelect}
								className="bg-slate-100 ml-2"
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

							<textarea
								name="message"
								id=""
								cols="30"
								rows="10"
								placeholder="Message"
								value={form.message}
								onChange={handleChange}
								className="p-2 w-[100%] rounded bg-slate-100 my-2 outline-none"
							></textarea>
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
					<div className="sm:w-[50%] w-[100%]">
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
				</div>
			</div>
		</section>
	);
}

export default Contact;
