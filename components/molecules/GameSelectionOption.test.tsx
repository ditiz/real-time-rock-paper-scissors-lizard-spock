import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import GameSelectionOptionMolecule from "./GameSelectionOption"

it("renders GameSelectionOptionMolecule unchanged", () => {
  const { container } = render(
    <GameSelectionOptionMolecule name={"test"} link="/test" />
  )
  expect(container).toMatchSnapshot()
})
