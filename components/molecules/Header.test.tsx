import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import HeaderMolecule from "./Header"

it("renders HeaderMolecule unchanged", () => {
  const { container } = render(<HeaderMolecule />)
  expect(container).toMatchSnapshot()
})

it("should contain title", () => {
  render(<HeaderMolecule />)
  expect(screen.getByText(/Rock Paper Scissors Lizard Spock/))
})
