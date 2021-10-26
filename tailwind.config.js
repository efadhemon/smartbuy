const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			default: "1rem",
			sm: "2rem",
			lg: "4rem",
			xl: "5rem",
			// padding: {
			// 	DEFAULT: "1rem",
			// },
		},
		screens: {
			// xs: "576",
			// sm: "767px",
			// md: "992px",
			// lg: "1199px",
			// xl: "1250px",
			// "2xl": "1250px",
			xs: "576px",
			sm: "640px",
			md: "768px",
			lg: "992px",
			xl: "1280px",
			"2xl": "1536px",
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
	plugins: [
		function ({ addComponents,theme }) {
			addComponents({
				".container": {
					width: "100%",
					// marginLeft: 'auto',
					// marginRight: 'auto',
					// paddingLeft: '2rem',
					// paddingRight: '2rem',
					"@screen xs": {
						maxWidth: theme("screens.xs"),
					},
					"@screen sm": {
						maxWidth: theme("screens.sm"),
					},
					"@screen md": {
						maxWidth: theme("screens.md"),
					},
					"@screen lg": {
						maxWidth: theme("screens.lg"),
					},
					"@screen xl": {
						maxWidth: theme("screens.xl"),
					},
					"@screen 2xl": {
						maxWidth: theme("screens.2xl"),
					},
				},
			});
		},
	],
};
