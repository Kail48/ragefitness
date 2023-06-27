/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        customblack:'#414141',
        darkblack:'#0C0C0C',
        lightyellow:'#FFF8C5',
        red:'#C83733'
      },
      fontFamily: {
        header: ['var(--font-fugaz-one)'],
        nav: ['var(--font-oswald)'],
        para: ['var(--font-nunito)'],
      },
      fontSize: {
        header: [
          "104px",
          {
            lineHeight: "100px",
            letterSpacing: "1.04px",
          },
        ],
        header2: [
          "48px",
          {
            lineHeight: "50px",
            letterSpacing: "0.48px",
          },
        ],
        header3: [
          "24px",
          {
            lineHeight: "50px",
            letterSpacing: "0.48px",
          },
        ],
        para: [
          "16px",
          {
            letterSpacing: "0.16px",
            fontWeight: "500",
          },
        ],
        nav: [
          "24px",
          {
            letterSpacing: "0.24px",
          },
        ],
      },
    },
  },
  plugins: [],
}
