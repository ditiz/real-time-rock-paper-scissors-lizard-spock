import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameClassicHeaderMolecule } from "."

export default {
  title: "Molecules/GameClassicHeader",
  component: GameClassicHeaderMolecule,
} as ComponentMeta<typeof GameClassicHeaderMolecule>

const Template: ComponentStory<typeof GameClassicHeaderMolecule> = (args) => (
  <GameClassicHeaderMolecule {...args} />
)

export const Default = Template.bind({})
