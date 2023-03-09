import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameTitleAtom } from ".."

export default {
  title: "Atoms/Game/Title",
  component: GameTitleAtom,
  args: {
    children: "Title",
  },
} as ComponentMeta<typeof GameTitleAtom>

const Template: ComponentStory<typeof GameTitleAtom> = (args) => (
  <GameTitleAtom {...args} />
)

export const Default = Template.bind({})
