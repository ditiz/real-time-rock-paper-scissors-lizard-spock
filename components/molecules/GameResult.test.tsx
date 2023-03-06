import { GameResult } from "@/types/game"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameResultMolecule from "./GameResult"

it("renders DisplayGameResult unchanged", () => {
  const { container } = render(<GameResultMolecule result={GameResult.win} />)
  expect(container).toMatchSnapshot()
})

test("win", async () => {
  render(<GameResultMolecule result={GameResult.win} />)
  expect(screen.getByText("You win !")).toBeTruthy()
})

test("tie", async () => {
  render(<GameResultMolecule result={GameResult.tie} />)
  expect(screen.getByText("It's a tie")).toBeTruthy()
})

test("lose", async () => {
  render(<GameResultMolecule result={GameResult.lose} />)
  expect(screen.getByText("You lose...")).toBeTruthy()
})
