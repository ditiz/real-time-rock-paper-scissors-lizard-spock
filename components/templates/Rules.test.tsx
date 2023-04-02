import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import RulesTemplate from "./Rules"

it("renders RulesTemplate unchanged", () => {
  const { container } = render(<RulesTemplate />)
  expect(container).toMatchSnapshot()
})
