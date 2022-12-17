module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: '[data-theme="dark"]',
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						h1: {
							color: "var(--neutral)",
						},
						h2: {
							color: "var(--neutral)",
						},
						h3: {
							color: "var(--neutral)",
						},
						h4: {
							color: "var(--neutral)",
						},
						p: {
							color: "rgba(var(--secondary-rgb), .7)",
						},
						a: {
							color: "rgba(var(--secondary-rgb), .7)",
						},
						blockquote: {
							"border-left-color": "rgba(var(--secondary-rgb), .7)",
							"color": "rgba(var(--secondary-rgb), .7)",
						},
						strong: {
							color: "rgba(var(--secondary-rgb), 1)",
						},
						pre: {
							"background": "rgba(var(--secondary-rgb), .1)",
							color: "var(--secondary)"
						},
						ol: {
							color: "rgba(var(--secondary-rgb), .7)",
						},
						ul: {
							color: "rgba(var(--secondary-rgb), .7)",
						},
						"li::marker": {
							color: "rgba(var(--secondary-rgb), 1)",
						},
					},
				},
			},
		},
	},
	daisyui: {
		themes: [
			{
				dark: {
					primary: "#121212",
					secondary: "#e7e7e7",
					accent: "#adadad",
					neutral: "#006eff",
					"base-100": "#4797ff",
					"--neutral": "#006eff",
					"--primary": "#121212",
					"--primary-rgb": "18, 18, 18",
					"--secondary": "#e7e7e7",
					"--secondary-rgb": "231,231,231",
					"--dots": "#1f1f1f",
				},
				light: {
					primary: "#F9F7F7",
					secondary: "#121212",
					accent: "#404040",
					neutral: "#006eff",
					"base-100": "#4797ff",
					"--neutral": "#006eff",
					"--base-100": "#4797ff",
					"--primary": "#F9F7F7",
					"--primary-rgb": "249, 247, 247",
					"--secondary": "#121212",
					"--secondary-rgb": "18, 18, 18",
					"--dots": "#d1d1d1",
				}
			}
		]
	}
};
