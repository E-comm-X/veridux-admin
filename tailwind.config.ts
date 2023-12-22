import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#006FCF",
        success: {
          700: "#036B26",
          500: "#099137",
          50: "#E7F6EC",
        },
        error: {
          700: "#9E0A05",
          50: "#FBEAE9",
        },
        grey: {
          500: "#667185",
          900: "#101928",
        },
      },
    },
  },
  plugins: [],
}
export default config
