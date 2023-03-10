module.exports = {
  description: "Generates a new React atom component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What's the name of the atom?",
      validate: function (value) {
        let message = true
        if (!/.+/.test(value)) {
          message = console.error("Missing", "you must define a atom name")
        } else if (value.length < 3) {
          message = console.error(
            "Too Short",
            `"${value}" is not descriptive enough`
          )
        } else if (/atom/gim.test(value)) {
          message = console.error(
            "Missing",
            "Atom name shouldn't contain 'atom'"
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
        path: "components/atoms/{{pascalCase name}}.tsx",
        templateFile: "./tools/generators/atom/templates/atom.hbs",
      },
      {
        type: "add",
        path: "components/atoms/{{pascalCase name}}.stories.tsx",
        templateFile: "./tools/generators/atom/templates/atom.stories.hbs",
      },
      {
        type: "modify",
        path: "components/atoms/index.ts",
        pattern: /(\/\/ imports)/g,
        template: 'import {{pascalCase name}}Atom from "./{{name}}"\n$1',
      },
      {
        type: "modify",
        path: "components/atoms/index.ts",
        pattern: /(\/\/ export)/g,
        template: "\t{{pascalCase name}}Atom,\n$1",
      },
    ]
  },
}
