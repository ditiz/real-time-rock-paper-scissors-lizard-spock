import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import NavbarOrganism from "./Navbar"

it("renders NavbarOrganism unchanged", () => {
  const { container } = render(<NavbarOrganism />)
  expect(container).toMatchSnapshot()
})

it("should have logo", () => {
  // TODO: create logo and check it here
})

it("should have links", () => {
  render(<NavbarOrganism />)
  expect(screen.getAllByRole("link")).toHaveLength(2)
})
