import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import RulesMainMolecule from "./RulesMain"

it("renders RulesMainMolecule unchanged", () => {
  const { container } = render(<RulesMainMolecule />)
  expect(container).toMatchSnapshot()
})

it("shoud contain game description", () => {
  render(<RulesMainMolecule />)
  expect(
    screen.getByText(
      /The game is an expansion on the game Rock, Paper, Scissors/
    )
  ).toBeInTheDocument()
})
