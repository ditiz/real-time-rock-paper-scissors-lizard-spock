import { ComponentMeta, ComponentStory } from "@storybook/react"
import { RulesMainMolecule } from "."

export default {
  title: "Molecules/RulesMain",
  component: RulesMainMolecule,
} as ComponentMeta<typeof RulesMainMolecule>

const Template: ComponentStory<typeof RulesMainMolecule> = (args) => (
  <RulesMainMolecule {...args} />
)

export const Default = Template.bind({})
