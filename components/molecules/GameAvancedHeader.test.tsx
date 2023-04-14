import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameAdvancedHeaderMolecule from "./GameAvancedHeader"

it("renders GameAdvancedHeaderMolecule unchanged", () => {
  const { container } = render(<GameAdvancedHeaderMolecule />)
  expect(container).toMatchSnapshot()
})

it("should contain title", () => {
  render(<GameAdvancedHeaderMolecule />)
  expect(screen.getByText(/Rock Paper Scissors Lizard Spock/))
})
