import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GameSelectionOptionMolecule } from "."

export default {
  title: "Molecules/GameSelectionOption",
  component: GameSelectionOptionMolecule,
} as ComponentMeta<typeof GameSelectionOptionMolecule>

const Template: ComponentStory<typeof GameSelectionOptionMolecule> = (args) => (
  <GameSelectionOptionMolecule {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: "Test",
  link: "",
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  name: "Test",
  link: "",
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates,
      temporibus sit autem facere distinctio sunt? Aliquam cupiditate neque
      blanditiis itaque enim impedit odio nesciunt? Dolor earum vitae maiores
      labore!
    </p>
  ),
}
