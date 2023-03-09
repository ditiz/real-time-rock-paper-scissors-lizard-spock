import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameResultAtom } from ".."

export default {
  title: "Atoms/Game/Result",
  component: GameResultAtom,
  args: {
    children: "win",
  },
} as ComponentMeta<typeof GameResultAtom>

const Template: ComponentStory<typeof GameResultAtom> = (args) => (
  <GameResultAtom {...args} />
)

export const Default = Template.bind({})
