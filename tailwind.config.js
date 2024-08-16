/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{'times': ['"Times New Roman"', 'serif']
        
      },colors: {
        navy: '#011F4B',
        beige: '#F5F5DC',}
    },
    
  },
  plugins: [],
}

