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
          "--primary": "#121212",
          "--primary-rgb": "18, 18, 18",
          "--secondary": "#e7e7e7",
          "--secondary-rgb": "231, 231, 231",
          "--accent": "#adadad",
          "--neutral": "#006eff",
          "--neutral-rgb": "0 110 255",
          "--dots": "#1f1f1f"
        },
        light: {
          primary: "#F9F7F7",
          secondary: "#121212",
          accent: "#404040",
          neutral: "#006eff",
          "--primary": "#F9F7F7",
          "--primary-rgb": "249, 247, 247",
          "--secondary": "#121212",
          "--secondary-rgb": "18, 18, 18",
          "--accent": "#404040",
          "--neutral": "#006eff",
          "--neutral-rgb": "0 110 255",
          "--dots": "#d1d1d1"
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
              color: "var(--accent)",
              "overflow-wrap": "anywhere"
            },
            "h1, h2, h3, h4": {
              color: "var(--neutral)"
            },
            "ul li::marker": {
              color: "var(--secondary)"
            },
            strong: {
              color: "var(--secondary)"
            },
            blockquote: {
              "border-left-color": "var(--accent)",
              color: "var(--accent)"
            },
            pre: {
              background: "var(--secondary)",
              color: "var(--secondary)"
            },
            "img, iframe": {
              filter:
                "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));",
              "border-radius": "10px",
              "margin-left": "auto",
              "margin-right": "auto"
            },
            ".youtube": {
              "aspect-ratio": "16 / 9",
              width: "100%"
            },
            ".heading-link": {
              "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transition-property": "transform, filter",
              transform: "translateY(-1px)",
              "transition-duration": "150ms",
              display: "inline-block",
              color: "var(--neutral)",
              "vertical-align": "sub",
              "margin-right": "10px"
            },
            ".heading-link:hover, .heading-link:focus-visible": {
              filter: "drop-shadow(2px 5px 5px rgb(var(--neutral-rgb) / 0.4))",
              transform: "translateY(-2px)",
              outline: "none"
            }
          }
        }
      }
    }
  }
};
