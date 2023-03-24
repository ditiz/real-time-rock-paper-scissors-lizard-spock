import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import RulesDetailsOrganism from "./RulesDetails"

it("renders RulesDetailsOrganism unchanged", () => {
  const { container } = render(<RulesDetailsOrganism />)
  expect(container).toMatchSnapshot()
})

it("should contain image of rules", () => {
  render(<RulesDetailsOrganism />)
  expect(screen.getByRole("img")).toBeInTheDocument()
})

it("should contain rules", () => {
  render(<RulesDetailsOrganism />)
  expect(screen.getByText("Scissors cuts Paper")).toBeInTheDocument()
  expect(screen.getByText("Spock vaporizes Rock")).toBeInTheDocument()
})
