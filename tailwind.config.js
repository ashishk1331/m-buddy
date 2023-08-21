/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dev: {
          100: "#001C30",
          200: "#176B87",
          300: "#64CCC5",
          400: "#DAFFFB",
        }
      }
    },
  },
  plugins: [],
}
