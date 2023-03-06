module.exports = {
  description: "Generates a new React organism component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What's the name of the organism?",
      validate: function (value) {
        let message = true
        if (!/.+/.test(value)) {
          message = console.error("Missing", "you must define a organism name")
        } else if (value.length < 3) {
          message = console.error(
            "Too Short",
            `"${value}" is not descriptive enough`
          )
        } else if (/organism/gim.test(value)) {
          message = console.error(
            "Missing",
            "organism name shouldn't contain 'organism'"
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
        path: "components/organisms/{{pascalCase name}}.tsx",
        templateFile: "./tools/generators/organism/templates/organism.hbs",
      },
      {
        type: "add",
        path: "components/organisms/{{pascalCase name}}.test.tsx",
        templateFile: "./tools/generators/organism/templates/organism.test.hbs",
      },
    ]
  },
}
