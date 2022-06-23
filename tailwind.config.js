module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.svelte",
      "./src/**/*.html",
    ]
  },
  theme: {
    extend: {
      colors: {
        cv: "#e53273",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
