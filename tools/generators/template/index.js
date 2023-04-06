module.exports = {
  description: "Generates a new React Template component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What's the name of the Template?",
      validate: function (value) {
        let message = true
        if (!/.+/.test(value)) {
          message = console.error("Missing", "you must define a Template name")
        } else if (value.length < 3) {
          message = console.error(
            "Too Short",
            `"${value}" is not descriptive enough`
          )
        } else if (/template/gim.test(value)) {
          message = console.error(
            "Missing",
            "template name shouldn't contain 'template'"
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
        path: "components/templates/{{pascalCase name}}.tsx",
        templateFile: "./tools/generators/template/templates/template.hbs",
      },
      {
        type: "add",
        path: "components/templates/{{pascalCase name}}.test.tsx",
        templateFile: "./tools/generators/template/templates/template.test.hbs",
      },
      {
        type: "add",
        path: "components/templates/{{pascalCase name}}.stories.tsx",
        templateFile:
          "./tools/generators/template/templates/template.stories.hbs",
      },
      {
        type: "modify",
        path: "components/templates/index.ts",
        pattern: /(\/\/ imports)/g,
        template: 'import {{pascalCase name}}Template from "./{{name}}"\n$1',
      },
      {
        type: "modify",
        path: "components/templates/index.ts",
        pattern: /(\/\/ export)/g,
        template: "\t{{pascalCase name}}Template,\n$1",
      },
    ]
  },
}
