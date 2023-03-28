import { ComponentMeta, ComponentStory } from "@storybook/react"
import { TextAtom } from "."

export default {
  title: "Atoms/Text",
  component: TextAtom,
} as ComponentMeta<typeof TextAtom>

const Template: ComponentStory<typeof TextAtom> = (args) => (
  <TextAtom {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: "Exemple of some text.",
}
