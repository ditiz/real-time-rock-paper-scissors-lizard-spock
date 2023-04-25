import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameSelectionOptionMolecule } from "."

export default {
  title: "Molecules/GameSelectionOption",
  component: GameSelectionOptionMolecule,
} as ComponentMeta<typeof GameSelectionOptionMolecule>

const Template: ComponentStory<typeof GameSelectionOptionMolecule> = (args) => (
  <GameSelectionOptionMolecule {...args} />
)

export const Default = Template.bind({})
