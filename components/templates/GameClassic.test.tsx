import * as hooks from "@/hooks"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameClassicTemplate from "./GameClassic"

jest.mock("@/hooks", () => ({
  useCreateSocket: jest.fn(),
}))

it("renders GameClassicTemplate unchanged", () => {
  jest.spyOn(hooks, "useCreateSocket").mockImplementationOnce(() => ({
    connected: true,
    nbUser: 2,
    socket: {
      on: jest.fn(),
    } as any,
  }))

  const { container } = render(<GameClassicTemplate />)
  expect(container).toMatchSnapshot()
})

it("should contain title", () => {
  jest.spyOn(hooks, "useCreateSocket").mockImplementationOnce(() => ({
    connected: true,
    nbUser: 0,
    socket: {
      on: jest.fn(),
    } as any,
  }))

  render(<GameClassicTemplate />)
  expect(screen.getByText("Rock Paper Scissors")).toBeInTheDocument()
})
