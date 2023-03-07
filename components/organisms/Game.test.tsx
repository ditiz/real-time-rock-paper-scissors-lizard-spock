import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { Socket } from "socket.io"
import GameOrganism from "./Game"

it("renders GameOption unchanged", () => {
  const mockSocket = {
    on: jest.fn(),
    emit: jest.fn(),
  }

  const { container } = render(
    <GameOrganism socket={mockSocket as unknown as Socket} />
  )

  expect(container).toMatchSnapshot()
})

test("should listening for event 'rcv-action'", () => {
  const mockSocket = {
    on: jest.fn(),
    emit: jest.fn(),
  }

  render(<GameOrganism socket={mockSocket as unknown as Socket} />)
  expect(mockSocket.on).toBeCalledWith("rcv-action", expect.anything())
})

test("should emit event 'user-action'", () => {
  const mockSocket = {
    on: jest.fn(),
    emit: jest.fn(),
  }

  render(<GameOrganism socket={mockSocket as unknown as Socket} />)

  act(() => {
    screen.getAllByRole("img")[0].click()
  })

  expect(mockSocket.emit).toBeCalledWith("user-action", expect.anything())
})
