/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito' : '"Nunito", serif',
        'roboto' : '"Roboto", serif'
      },
      colors:{
        st: {
          100: '#1a1a1a',
          200: '#2a2a2a'
        },
        nd: '#1e40af',
        rd: '#0ea5e9',
        th: '',

      }
    },
  },
  plugins: [],
}