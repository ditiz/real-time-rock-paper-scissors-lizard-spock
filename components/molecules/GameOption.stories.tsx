import { ImageOption } from "@/types/game"
import { GameAdvanceOptions } from "@/utils/game"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameOptionMolecule } from "."

export default {
  title: "Molecules/Game/Option",
  component: GameOptionMolecule,
  argTypes: {
    option: {
      description: "The current option display in the component",
      type: "symbol",
      options: GameAdvanceOptions.reduce((acc, option) => {
        acc[option.value] = option
        return acc
      }, {} as Record<string, ImageOption>),
      control: { type: "select" },
    },
    choice: {
      options: GameAdvanceOptions.map((option) => option.value),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof GameOptionMolecule>

const Template: ComponentStory<typeof GameOptionMolecule> = (args) => (
  <GameOptionMolecule {...args} setChoice={() => {}} />
)

export const Selected = Template.bind({})
Selected.args = {
  choice: GameAdvanceOptions[0].value,
  option: GameAdvanceOptions[0],
}

export const Unselected = Template.bind({})
Unselected.args = {
  choice: GameAdvanceOptions[1].value,
  option: GameAdvanceOptions[3],
}
