const generateAtom = require("./tools/generators/atom")
const generateMolecule = require("./tools/generators/molecule")

module.exports = function (plop) {
  plop.setGenerator("atom", generateAtom)
  plop.setGenerator("molecule", generateMolecule)
}
