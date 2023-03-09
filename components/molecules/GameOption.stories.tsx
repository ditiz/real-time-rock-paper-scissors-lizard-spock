import { ImageOption } from "@/types/game"
import { imageOptions } from "@/utils/game"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameOptionMolecule } from "."

export default {
  title: "Molecules/Game/Option",
  component: GameOptionMolecule,
  argTypes: {
    option: {
      description: "The current option display in the component",
      type: "symbol",
      options: imageOptions.reduce((acc, option) => {
        acc[option.value] = option
        return acc
      }, {} as Record<string, ImageOption>),
      control: { type: "select" },
    },
    choice: {
      options: imageOptions.map((option) => option.value),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof GameOptionMolecule>

const Template: ComponentStory<typeof GameOptionMolecule> = (args) => (
  <GameOptionMolecule {...args} setChoice={() => {}} />
)

export const Selected = Template.bind({})
Selected.args = {
  choice: imageOptions[0].value,
  option: imageOptions[0],
}

export const Unselected = Template.bind({})
Unselected.args = {
  choice: imageOptions[1].value,
  option: imageOptions[3],
}
