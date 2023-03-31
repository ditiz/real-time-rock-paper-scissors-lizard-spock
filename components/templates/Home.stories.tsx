import { ComponentMeta, ComponentStory } from "@storybook/react"
import { HomeTemplate} from "."

export default {
  title: "Templates/Home",
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
)

export const Default = Template.bind({})
