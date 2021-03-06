var path = require('path');

// console.log(__dirname);
// console.log(path.join(__dirname, "src"));

module.exports = function (rootDirectory) {
  // You cannot use __dirname because it is just the local folder
  // You can use console.log() in here to test! (best write it outside the module.exports)
  return {
    contentBase: path.join(rootDirectory, "src"),
    compress: false,
    port: 9000
  };
};
