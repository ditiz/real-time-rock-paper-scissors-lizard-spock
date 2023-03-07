const generateAtom = require("./tools/generators/atom")
const generateMolecule = require("./tools/generators/molecule")
const generateOrganism = require("./tools/generators/organism")

module.exports = function (plop) {
  plop.setGenerator("atom", generateAtom)
  plop.setGenerator("molecule", generateMolecule)
  plop.setGenerator("organism", generateOrganism)
}
