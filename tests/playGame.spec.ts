import { expect, test } from "@playwright/test"

const projectUrl = "http://localhost:3000/"

test("title", async ({ page }) => {
  await page.goto(projectUrl)

  const title = await page.innerText("h1")

  expect(title).toBe("Rock Paper Scissors Lizard Spock")
})
