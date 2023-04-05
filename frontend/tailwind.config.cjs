/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-image":
					"url('https://images.unsplash.com/photo-1588632901974-5ae3618d967b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8&w=1000&q=80')",
			},
			screens: {
				xs: "450px",
			},
		},
	},
	plugins: [],
};
