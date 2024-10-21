// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
   
//   plugins: [require('daisyui')],
//   daisyui: {
//     themes: [
//       {
//         carDoctortheme: {
//           ...require("daisyui/src/theming/themes")["light"],
//           "primary": "#FF3811",
//           "secondary": "#f6d860",
//           "accent": "#37cdbe",
//           "neutral": "#3d4451",
//           "base-100": "#ffffff",
//         },
//       }, 
//     ],
//   },
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
        themes: [
          {
            carDoctortheme: {
             
              "primary": "#FF3811",
              "secondary": "#f6d860",
              "accent": "#37cdbe",
              "neutral": "#3d4451",
              "base-100": "#ffffff",
            },
          }, 
        ],
      },
}