import { ComponentMeta, ComponentStory } from "@storybook/react"
import { HeaderAtom } from "."

export default {
  title: "Atoms/Header",
  component: HeaderAtom,
  argTypes: {
    children: {
      description: "Text to display",
      control: { type: "jsx" },
    },
  },
} as ComponentMeta<typeof HeaderAtom>

const Template: ComponentStory<typeof HeaderAtom> = (args) => (
  <HeaderAtom {...args} />
)

export const H1 = Template.bind({})
H1.args = {
  children: <h1>This is a title</h1>,
}

export const H2 = Template.bind({})
H2.args = {
  children: <h2>This is a secondary title</h2>,
}
