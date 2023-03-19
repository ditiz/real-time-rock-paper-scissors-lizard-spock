import { ComponentMeta, ComponentStory } from "@storybook/react"
import { WaitingMessageAtom } from ".."

export default {
  title: "Atoms/Game/WaitingMessage",
  component: WaitingMessageAtom,
} as ComponentMeta<typeof WaitingMessageAtom>

const Template: ComponentStory<typeof WaitingMessageAtom> = (args) => (
  <WaitingMessageAtom {...args} />
)

export const Default = Template.bind({})
Default.args = {
  message: "Waiting for another player",
}
