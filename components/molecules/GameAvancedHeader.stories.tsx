import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameAdvancedHeaderMolecule } from "."

export default {
  title: "Molecules/Header/GameAdvanced",
  component: GameAdvancedHeaderMolecule,
} as ComponentMeta<typeof GameAdvancedHeaderMolecule>

const Template: ComponentStory<typeof GameAdvancedHeaderMolecule> = (args) => (
  <GameAdvancedHeaderMolecule {...args} />
)

export const Default = Template.bind({})
