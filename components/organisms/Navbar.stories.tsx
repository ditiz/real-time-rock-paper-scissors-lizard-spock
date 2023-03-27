import { ComponentMeta, ComponentStory } from "@storybook/react"
import { NavbarOrganism} from "."

export default {
  title: "Organisms/Navbar",
  component: NavbarOrganism,
} as ComponentMeta<typeof NavbarOrganism>

const Template: ComponentStory<typeof NavbarOrganism> = (args) => (
  <NavbarOrganism {...args} />
)

export const Default = Template.bind({})
