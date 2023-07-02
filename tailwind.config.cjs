module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#121212",
          secondary: "#e7e7e7",
          accent: "#adadad",
          neutral: "#006eff",
          "--neutral": "#006eff",
          "--primary": "#121212",
          "--primary-rgb": "18, 18, 18",
          "--secondary": "#e7e7e7",
          "--secondary-rgb": "231, 231, 231",
          "--dots": "#1f1f1f",
          "--nav": "rgba(18, 18, 18, 0.6)"
        },
        light: {
          primary: "#F9F7F7",
          secondary: "#121212",
          accent: "#404040",
          neutral: "#006eff",
          "--neutral": "#006eff",
          "--primary": "#F9F7F7",
          "--primary-rgb": "249, 247, 247",
          "--secondary": "#121212",
          "--secondary-rgb": "18, 18, 18",
          "--dots": "#d1d1d1",
          "--nav": "rgba(249, 247, 247, 0.6)"
        }
      }
    ]
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "a, p, ol, ul": {
              color: "rgba(var(--secondary-rgb), .7)",
              "overflow-wrap": "anywhere"
            },
            blockquote: {
              "border-left-color": "rgba(var(--secondary-rgb), .7)",
              color: "rgba(var(--secondary-rgb), .7)"
            },
            "h1, h2, h3, h4": {
              color: "var(--neutral)"
            },
            pre: {
              background: "rgba(var(--secondary-rgb), .1)",
              color: "var(--secondary)"
            },
            "strong, li::marker": {
              color: "rgba(var(--secondary-rgb), 1)"
            },
            "img, iframe": {
              "border-radius": "10px",
              "margin-left": "auto",
              "margin-right": "auto"
            },
            ".youtube": {
              "aspect-ratio": "16 / 9",
              "width": "100%"
            }
          }
        }
      }
    }
  }
};
