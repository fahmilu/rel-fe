/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      "2xl": "1280px",
    },
    extend: {
      fontSize: {
        'heading-1': ["52px", "72px"],
        'heading-2': ["42px", "64px"],
        'heading-3': ["32px", "48px"],
        'heading-4': ["24px", "150%"],
        'heading-1-mobile': ["40px", "52px"],
        'heading-2-mobile': ["30px", "52px"],
        'heading-3-mobile': ["24px", "38px"],
        'heading-4-mobile': ["20px", "32px"],
        sm: ["14px", "20px"],
        base: ["16px", "26px"],
        lg: ["18px", "30px"],
        xl: ["20px", "32px"],
      },
      fontFamily: {
        global: ["var(--font-poppins)"],
      },
      colors: {
        orange: "#F38D1E",
      },  
    },
  },
  plugins: [],
}

