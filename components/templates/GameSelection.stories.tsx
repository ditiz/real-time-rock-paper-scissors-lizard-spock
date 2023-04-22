import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameSelectionTemplate} from "."

export default {
  title: "Templates/GameSelection",
  component: GameSelectionTemplate,
} as ComponentMeta<typeof GameSelectionTemplate>

const Template: ComponentStory<typeof GameSelectionTemplate> = (args) => (
  <GameSelectionTemplate {...args} />
)

export const Default = Template.bind({})
