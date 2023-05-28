import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameSelectionTemplate from "./GameSelection"

it("renders GameSelectionTemplate unchanged", () => {
  const { container } = render(<GameSelectionTemplate />)
  expect(container).toMatchSnapshot()
})
