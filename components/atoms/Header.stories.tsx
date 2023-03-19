import { ComponentMeta, ComponentStory } from "@storybook/react"
import { HeaderAtom } from "."

export default {
  title: "Atoms/Header",
  component: HeaderAtom,
} as ComponentMeta<typeof HeaderAtom>

const Template: ComponentStory<typeof HeaderAtom> = (args) => (
  <HeaderAtom {...args} />
)

export const Default = Template.bind({})
