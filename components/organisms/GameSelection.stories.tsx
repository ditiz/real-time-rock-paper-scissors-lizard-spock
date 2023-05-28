import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameSelectionOrganism} from "."

export default {
  title: "Organisms/GameSelection",
  component: GameSelectionOrganism,
} as ComponentMeta<typeof GameSelectionOrganism>

const Template: ComponentStory<typeof GameSelectionOrganism> = (args) => (
  <GameSelectionOrganism {...args} />
)

export const Default = Template.bind({})
