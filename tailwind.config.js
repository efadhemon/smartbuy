const colors = require("tailwindcss/colors")

module.exports = {
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
			},
		},
		screens: {
			xs: "576",
			sm: "767px",
			md: "992px",
			lg: "1199px",
			xl: "1250px",
			"2xl": "1250px",
		},
		colors: {
			orange: "#f46c12",
			main: "#393d72",
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
			blue: colors.blue,
			green: colors.green,
		},
		extend: {
			backgroundImage: {
				"footer-wave": "url('/images/wave.svg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
