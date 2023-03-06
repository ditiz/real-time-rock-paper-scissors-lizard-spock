module.exports = {
  description: "Generates a new React molecule component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What's the name of the molecule?",
      validate: function (value) {
        let message = true
        if (!/.+/.test(value)) {
          message = console.error("Missing", "you must define a molecule name")
        } else if (value.length < 3) {
          message = console.error(
            "Too Short",
            `"${value}" is not descriptive enough`
          )
        } else if (/molecule/gim.test(value)) {
          message = console.error(
            "Missing",
            "molecule name shouldn't contain 'molecule'"
          )
        }
        return message
      },
    },
  ],
  actions: function () {
    return [
      {
        type: "add",
        path: "components/molecules/{{pascalCase name}}.tsx",
        templateFile: "./tools/generators/molecule/templates/molecule.hbs",
      },
      {
        type: "add",
        path: "components/molecules/{{pascalCase name}}.test.tsx",
        templateFile: "./tools/generators/molecule/templates/molecule.test.hbs",
      },
    ]
  },
}
