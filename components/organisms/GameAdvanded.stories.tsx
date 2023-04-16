import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Socket } from "socket.io"
import { GameAdvandedOrganism } from "."

export default {
  title: "Organisms/Game",
  component: GameAdvandedOrganism,
  argTypes: {
    socket: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof GameAdvandedOrganism>

const mockSocket = {
  on: () => {},
  emit: () => {},
}

const Template: ComponentStory<typeof GameAdvandedOrganism> = (args) => (
  <GameAdvandedOrganism {...args} socket={mockSocket as unknown as Socket} />
)

export const Default = Template.bind({})
