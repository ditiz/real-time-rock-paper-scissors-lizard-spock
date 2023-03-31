import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import HomeTemplate from "./Home"

it("renders HomeTemplate unchanged", () => {
  const { container } = render(<HomeTemplate />)
  expect(container).toMatchSnapshot()
})
