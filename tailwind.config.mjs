/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          pink: "#EC4899", // pink-500
          yellow: "#FACC15", // yellow-400
          black: "#000000",
        }
      },
    },
  },
  plugins: [],
};
