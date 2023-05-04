import { ComponentMeta, ComponentStory } from "@storybook/react"
import { LoadingAtom } from "."

export default {
  title: "Atoms/Loading",
  component: LoadingAtom,
} as ComponentMeta<typeof LoadingAtom>

const Template: ComponentStory<typeof LoadingAtom> = (args) => (
  <LoadingAtom {...args} />
)

export const Default = Template.bind({})
