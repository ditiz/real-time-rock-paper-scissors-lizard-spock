import { expect, test } from "@playwright/test"

const projectUrl = "http://localhost:3000/"

test("title", async ({ page }) => {
  await page.goto(projectUrl)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Rock Paper Scissor Lizard Spock/)
})

test("header", async ({ page }) => {
  await page.goto(projectUrl)

  const title = await page.innerText("h1")

  expect(title).toBe("Rock Paper Scissors Lizard Spock")
})

test("waiting message", async ({ page }) => {
  await page.goto(projectUrl)
  expect(page.getByText("Waiting for another player")).toBeTruthy()
})
