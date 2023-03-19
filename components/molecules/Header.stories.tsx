import { ComponentMeta, ComponentStory } from "@storybook/react"
import { HeaderMolecule } from "."

export default {
  title: "Molecules/Header",
  component: HeaderMolecule,
} as ComponentMeta<typeof HeaderMolecule>

const Template: ComponentStory<typeof HeaderMolecule> = (args) => (
  <HeaderMolecule {...args} />
)

export const Default = Template.bind({})
