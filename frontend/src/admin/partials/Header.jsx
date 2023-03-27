import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset, register } from "../../features/auth/authSlice";

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/admin");
	};

	return (
		<nav className="px-4 w-full flex items-center py-5 fixed top-0 z-20 bg-slate-700 text-white">
			<div className="w-full flex justify-between items-center mx-auto ml-4">
				<Link to="/admin">DevTech</Link>
			</div>
			<ul className="list-none sm-flex flex-row gap-10 mr-4">
				{user ? (
					<li>
						<button onClick={onLogout}>Logout</button>
					</li>
				) : (
					<>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Header;
