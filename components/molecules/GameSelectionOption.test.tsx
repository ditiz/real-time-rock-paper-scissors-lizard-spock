import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameSelectionOptionMolecule from "./GameSelectionOption"

it("renders GameSelectionOptionMolecule unchanged", () => {
  const { container } = render(<GameSelectionOptionMolecule />)
  expect(container).toMatchSnapshot()
})
