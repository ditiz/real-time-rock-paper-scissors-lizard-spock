import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameClassicOrganism} from "."

export default {
  title: "Organisms/GameClassic",
  component: GameClassicOrganism,
} as ComponentMeta<typeof GameClassicOrganism>

const Template: ComponentStory<typeof GameClassicOrganism> = (args) => (
  <GameClassicOrganism {...args} />
)

export const Default = Template.bind({})
