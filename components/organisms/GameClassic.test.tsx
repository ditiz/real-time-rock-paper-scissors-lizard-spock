import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameClassicOrganism from "./GameClassic"

it("renders GameClassicOrganism unchanged", () => {
  const { container } = render(<GameClassicOrganism />)
  expect(container).toMatchSnapshot()
})
