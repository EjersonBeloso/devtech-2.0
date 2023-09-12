import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

function Register() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate("/devtech-2.0/dashboard");
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error("Password do not match");
		} else {
			const userData = {
				name,
				email,
				password,
			};
			dispatch(register(userData));
		}
	};
	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	return (
		<>
			<section className="max-w-[400px] mt-12 mx-auto flex flex-col justify-center text-center bg-slate-700 text-white rounded-md shadow-slate-700 shadow-md">
				<div className="m-12">
					<h1 className="text-[32px] font-bold border-b-2 border-slate-500 pb-2">
						Register
					</h1>
				</div>
				<div>
					<form onSubmit={onSubmit} className=" flex-col text-start ml-4">
						<div className=" flex flex-col">
							<label>Name</label>
							<input
								id="name"
								name="name"
								value={name}
								onChange={onChange}
								className="m-2 p-2 border-red-500 border-2 rounded-full bg-slate-600"
								type="text"
								placeholder="Enter name"
							/>
						</div>
						<div className="flex flex-col">
							<label>Email</label>
							<input
								id="email"
								name="email"
								value={email}
								onChange={onChange}
								className="m-2 p-2 border-red-500 border-2 rounded-full bg-slate-600"
								type="email"
								placeholder="Enter Email"
								required
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
								required
							/>
						</div>
						<div className="flex flex-col">
							<label>Confirm Password</label>
							<input
								id="password2"
								name="password2"
								value={password2}
								onChange={onChange}
								className="m-2 p-2 border-red-500 border-2 rounded-full bg-slate-600"
								type="password"
								placeholder="Confirm Password"
							/>
						</div>
						<button className="bg-red-500 block w-[200px] m-auto mt-2 mb-8 p-2 rounded-full">
							Submit
						</button>
						<p className="text-center  pb-2">or</p>
						<button
							className="bg-red-500 block w-[200px] m-auto mt-2 mb-8 p-2 rounded-full"
							onClick={() => {
								navigate("/devtech-2.0/admin");
							}}
						>
							Login
						</button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Register;
