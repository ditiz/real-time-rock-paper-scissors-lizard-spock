import { ComponentMeta, ComponentStory } from "@storybook/react"
import { RulesTemplate} from "."

export default {
  title: "Templates/Rules",
  component: RulesTemplate,
} as ComponentMeta<typeof RulesTemplate>

const Template: ComponentStory<typeof RulesTemplate> = (args) => (
  <RulesTemplate {...args} />
)

export const Default = Template.bind({})
