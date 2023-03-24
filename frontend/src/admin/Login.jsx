import { useState, useEffect } from "react";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData(
			(prevState) => ({
				...prevState,
				[e.target.name]: e.target.value,
			}),
			console.log(formData)
		);
	};
	const onSubmit = (e) => {
		e.preventDefault;
	};
	return (
		<>
			<section className="max-w-[400px] mt-12 mx-auto flex flex-col justify-center text-center bg-slate-700 text-white rounded-md shadow-slate-700 shadow-md">
				<div className="m-12">
					<h1 className="text-[32px] font-bold border-b-2 border-slate-500 pb-2">
						Login
					</h1>
				</div>
				<div>
					<form onSubmit={onSubmit} className=" flex-col text-start ml-4">
						<div className=" flex flex-col">
							<label>Email</label>
							<input
								id="email"
								name="email"
								value={email}
								onChange={onChange}
								className="m-2 p-2 border-red-500 border-2 rounded-full bg-slate-600"
								type="email"
								placeholder="Enter email"
							/>
						</div>
						<div className="flex flex-col">
							<label>Password</label>
							<input
								id="password"
								name="password"
								value={password}
								onChange={onChange}
								className="m-2 p-2 border-red-500 border-2 rounded-full bg-slate-600"
								type="password"
								placeholder="Enter Password"
							/>
						</div>
						<button
							type="submit"
							className="bg-red-500 block w-[200px] m-auto mt-2 mb-8 p-2 rounded-full"
						>
							Login
						</button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Login;
