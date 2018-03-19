module.exports = {
  test: /\.png$/,
  loader: "url-loader",
  query: { mimetype: "image/png" }
};
