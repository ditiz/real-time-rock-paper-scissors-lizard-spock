import { ComponentMeta, ComponentStory } from "@storybook/react"
import { WaitingPlayerMolecule } from "."

export default {
  title: "Molecules/WaitingPlayer",
  component: WaitingPlayerMolecule,
} as ComponentMeta<typeof WaitingPlayerMolecule>

const Template: ComponentStory<typeof WaitingPlayerMolecule> = (args) => (
  <WaitingPlayerMolecule {...args} />
)

export const Default = Template.bind({})
