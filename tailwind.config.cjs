module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: 'class, [data-theme="dark"]',
	plugins: [require("daisyui")],
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
					"--secondary": "#e7e7e7",
					"--accent": "#FFD369",
					"--light": "#00B7C2",
					"--dots": "#1f1f1f"
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
					"--secondary": "#121212",
					"--accent": "#FFD369",
					"--light": "#00B7C2",
					"--dots": "#d1d1d1"
				}
			}
		]
	}
};
