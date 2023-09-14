module.exports = {
  postcss: {
    plugins: [
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
    ],
  },
};
