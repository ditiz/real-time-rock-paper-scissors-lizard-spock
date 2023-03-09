import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Socket } from "socket.io"
import { GameOrganism } from "."

export default {
  title: "Organism/Game",
  component: GameOrganism,
  argTypes: {
    socket: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof GameOrganism>

const mockSocket = {
  on: () => {},
  emit: () => {},
}

const Template: ComponentStory<typeof GameOrganism> = (args) => (
  <GameOrganism {...args} socket={mockSocket as unknown as Socket} />
)

export const Default = Template.bind({})
