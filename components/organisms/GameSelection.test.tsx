import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameSelectionOrganism from "./GameSelection"

it("renders GameSelectionOrganism unchanged", () => {
  const { container } = render(<GameSelectionOrganism />)
  expect(container).toMatchSnapshot()
})
