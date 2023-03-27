import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import NavbarOrganism from "./Navbar"

it("renders NavbarOrganism unchanged", () => {
  const { container } = render(<NavbarOrganism />)
  expect(container).toMatchSnapshot()
})
