/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-3/4': '75vh',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-2/3': '66vh',
        'screen-1/4': '25vh',
        '45%': '45vh',
      },
      minWidth: {
        'screen-1/2': '50vw',
        'screen-1/3': '33vw',
        'screen-2/3': '66vw',
        'screen-1/4': '25vw',
        'screen-3/4': '75vw',

      },
      maxHeight: {
        'screen-3/4': '75vh',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-2/3': '66vh',
        'screen-1/4': '25vh',
      },
      maxWidth: {
        'screen-1/2': '50vw',
        'screen-1/3': '33vw',
        'screen-2/3': '66vw',
        'screen-1/4': '25vw',
        'screen-3/4': '75vw',

      },
      rotate: {
        '135': '135deg',
        '225': '225deg',
        '315': '315deg',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark", "bumblebee"],
  },
};
