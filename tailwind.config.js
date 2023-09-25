module.exports = {
  content: ['./src/**/*.{njk,md,html}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};
