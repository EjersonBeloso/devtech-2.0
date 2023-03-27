/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-image": "url()",
			},
			screens: {
				xs: "450px",
			},
		},
	},
	plugins: [],
};
