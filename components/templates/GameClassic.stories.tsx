import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameClassicTemplate} from "."

export default {
  title: "Templates/GameClassic",
  component: GameClassicTemplate,
} as ComponentMeta<typeof GameClassicTemplate>

const Template: ComponentStory<typeof GameClassicTemplate> = (args) => (
  <GameClassicTemplate {...args} />
)

export const Default = Template.bind({})
