import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameClassicTemplate from "./GameClassic"

it("renders GameClassicTemplate unchanged", () => {
  const { container } = render(<GameClassicTemplate />)
  expect(container).toMatchSnapshot()
})
