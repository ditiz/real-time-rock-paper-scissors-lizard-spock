const generateAtom = require("./tools/generators/atom");

module.exports = function (plop) {
  plop.setGenerator("atom", generateAtom);
};
