const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      javascript: "./src/index.js",
      html: "./src/index.html",
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
       {
  test: /\.svg$/,
  use: [
    {
      loader: "babel-loader"
    },
    {
      loader: "react-svg-loader",
      options: {
        jsx: true // true outputs JSX tags
      }
    }
  ]
},
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};