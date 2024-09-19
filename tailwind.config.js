/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'app-dark': '#181818',
				'primary-color': '#d80032',
        'secondary-color':"#e2b714"
			},
      fontFamily: {
				'primary-font': ['ClashGrotesk-Variable']
			},
    },
  },
  plugins: [],
}

