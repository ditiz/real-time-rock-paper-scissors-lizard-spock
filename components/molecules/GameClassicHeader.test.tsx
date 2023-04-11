import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameClassicHeaderMolecule from "./GameClassicHeader"

it("renders GameClassicHeaderMolecule unchanged", () => {
  const { container } = render(<GameClassicHeaderMolecule />)
  expect(container).toMatchSnapshot()
})
