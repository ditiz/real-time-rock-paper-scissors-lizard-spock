import { ComponentMeta, ComponentStory } from "@storybook/react"
import { NavbarAtom } from "."

export default {
  title: "Atoms/Navbar",
  component: NavbarAtom,
} as ComponentMeta<typeof NavbarAtom>

const Template: ComponentStory<typeof NavbarAtom> = (args) => (
  <NavbarAtom {...args} />
)

export const Default = Template.bind({})
