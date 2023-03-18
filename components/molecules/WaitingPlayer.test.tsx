import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import WaitingPlayerMolecule from "./WaitingPlayer"

it("renders WaitingPlayerMolecule unchanged", () => {
  const { container } = render(<WaitingPlayerMolecule />)
  expect(container).toMatchSnapshot()
})

it("should contain waiting message", () => {
  render(<WaitingPlayerMolecule />)
  expect(screen.getByText(/waiting/i)).toBeTruthy()
})
