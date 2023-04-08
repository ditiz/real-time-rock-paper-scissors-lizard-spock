import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameAdvancedTemplate } from "."

export default {
  title: "Templates/GameAdvanced",
  component: GameAdvancedTemplate,
} as ComponentMeta<typeof GameAdvancedTemplate>

const Template: ComponentStory<typeof GameAdvancedTemplate> = (args) => (
  <GameAdvancedTemplate {...args} />
)

export const Loading = Template.bind({})
