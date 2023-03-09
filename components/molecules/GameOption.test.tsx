import { Option } from "@/types/game"
import { imageOptions } from "@/utils/game"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import GameOptionMolecule from "./GameOption"

it("renders GameOption unchanged", () => {
  const { container } = render(
    <GameOptionMolecule
      choice={Option.rock}
      option={imageOptions[0]}
      setChoice={jest.fn}
    />
  )
  expect(container).toMatchSnapshot()
})

test("contain img", () => {
  render(
    <GameOptionMolecule
      choice={Option.rock}
      option={imageOptions[0]}
      setChoice={jest.fn}
    />
  )

  const img = screen.getByRole("img")

  expect(img).toBeInTheDocument()
  expect(img.getAttribute("src")).toBe(imageOptions[0].path)
  expect(img.getAttribute("alt")).toBe(imageOptions[0].alt)
})

test("click action", () => {
  const mockSetChoice = jest.fn()

  render(
    <GameOptionMolecule
      choice={Option.rock}
      option={imageOptions[0]}
      setChoice={mockSetChoice}
    />
  )

  screen.getByRole("img").click()

  expect(mockSetChoice).toBeCalledWith(imageOptions[0].value)
})
