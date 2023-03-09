import { GameResult } from "@/types/game"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameResultMolecule } from "."

export default {
  title: "Molecules/Game/Result",
  component: GameResultMolecule,
  argTypes: {
    result: {
      options: [GameResult.win, GameResult.tie, GameResult.lose],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof GameResultMolecule>

const Template: ComponentStory<typeof GameResultMolecule> = (args) => (
  <GameResultMolecule {...args} />
)

export const Win = Template.bind({})
Win.args = {
  result: GameResult.win,
}

export const Tie = Template.bind({})
Tie.args = {
  result: GameResult.tie,
}

export const Lose = Template.bind({})
Lose.args = {
  result: GameResult.lose,
}
