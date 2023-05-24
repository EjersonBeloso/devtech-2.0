import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
	const Links = [
		{ name: "HOME", link: "/home" },
		{ name: "ABOUT US", link: "/about" },
		{ name: "SERVICE", link: "/service" },
		{ name: "CONTACT US", link: "/contact" },
	];

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="bg-black bg-opacity-75 relative z-20 w-full text-white ">
			<div className="flex justify-between p-4 max-w-[1280px] mx-auto">
				<div>
					<Link
						to="/home"
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<p className="font-bold">
							Dev<span className="text-red-500">Tech</span>
						</p>
					</Link>
				</div>
				<nav
					ref={navRef}
					className="bg-purple-500 flex flex-col gap-4 fixed top-0 left-0 h-[100vh] w-[100vw]  justify-center items-center md:justify-end md:h-min md:top-[36px] md:relative z-10 md:px-4 md:flex-row -translate-y-full duration-1000 md:bg-transparent md:bg-none lg-translate"
				>
					{Links.map((link) => (
						<NavLink
							key={link.name}
							to={link.link}
							className={({ isActive }) => {
								return (
									"px-3 py-2 rounded-md text-sm font-medium no-underline hover:border-b-2 border-[#FA5252]" +
									(isActive
										? "text-gray-100 border-b-2 border-[#FA5252] duration-500"
										: "text-gray-800")
								);
							}}
						>
							{link.name}
						</NavLink>
					))}
					<button
						onClick={showNavbar}
						className="md:hidden visible absolute top-8 right-8 text-white"
					>
						<FaTimes />
					</button>
				</nav>
				<button onClick={showNavbar} className="md:hidden visible">
					<FaBars />
				</button>
			</div>
		</header>
	);
};

export default Navbar;
