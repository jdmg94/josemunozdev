module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
