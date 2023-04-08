import * as hooks from "@/hooks"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameAdvancedTemplate from "./GameAdvanced"

jest.mock("@/hooks", () => ({
  useCreateSocket: jest.fn(),
}))

it("renders GameAdvancedTemplate unchanged", () => {
  jest.spyOn(hooks, "useCreateSocket").mockImplementationOnce(() => ({
    connected: true,
    nbUser: 2,
    socket: {
      on: jest.fn(),
    } as any,
  }))

  const { container } = render(<GameAdvancedTemplate />)
  expect(container).toMatchSnapshot()
})

it("should loading", () => {
  jest.spyOn(hooks, "useCreateSocket").mockImplementationOnce(() => ({
    connected: false,
    nbUser: 0,
    socket: {
      on: jest.fn(),
    } as any,
  }))

  render(<GameAdvancedTemplate />)
  expect(screen.getByText(/Loading/)).toBeInTheDocument()
})

it("should contain title", () => {
  jest.spyOn(hooks, "useCreateSocket").mockImplementationOnce(() => ({
    connected: true,
    nbUser: 0,
    socket: {
      on: jest.fn(),
    } as any,
  }))

  render(<GameAdvancedTemplate />)
  expect(
    screen.getByText("Rock Paper Scissors Lizard Spock")
  ).toBeInTheDocument()
})

it("should have waiting message", () => {
  jest.spyOn(hooks, "useCreateSocket").mockImplementationOnce(() => ({
    connected: true,
    nbUser: 1,
    socket: {
      on: jest.fn(),
    } as any,
  }))

  render(<GameAdvancedTemplate />)
  expect(screen.getByText(/waiting/i)).toBeInTheDocument()
})

it("should have game", () => {
  jest.spyOn(hooks, "useCreateSocket").mockImplementationOnce(() => ({
    connected: true,
    nbUser: 2,
    socket: {
      on: jest.fn(),
    } as any,
  }))

  render(<GameAdvancedTemplate />)
  expect(screen.getAllByRole("img")).toHaveLength(6)
})
