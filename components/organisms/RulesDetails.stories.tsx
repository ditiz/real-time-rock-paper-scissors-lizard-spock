import { ComponentMeta, ComponentStory } from "@storybook/react"
import { RulesDetailsOrganism} from "."

export default {
  title: "Organisms/RulesDetails",
  component: RulesDetailsOrganism,
} as ComponentMeta<typeof RulesDetailsOrganism>

const Template: ComponentStory<typeof RulesDetailsOrganism> = (args) => (
  <RulesDetailsOrganism {...args} />
)

export const Default = Template.bind({})
