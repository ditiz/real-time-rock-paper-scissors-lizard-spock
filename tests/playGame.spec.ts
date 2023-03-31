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
  const main = page.locator("main")
  await expect(main).toContainText("Waiting for another player")
})

test("game icons when 2 player are connected", async ({ browser }) => {
  const page = await browser.newPage()
  const page1 = await browser.newPage()

  await page.goto(projectUrl)
  await page1.goto(projectUrl)

  expect(page.getByRole("img", { name: "rock icons" })).toBeTruthy()
  expect(page.getByRole("img", { name: "paper icons" })).toBeTruthy()
  expect(page.getByRole("img", { name: "scissors icons" })).toBeTruthy()
  expect(page.getByRole("img", { name: "lizard icons" })).toBeTruthy()
  expect(page.getByRole("img", { name: "spock icons" })).toBeTruthy()
})

test.describe(() => {
  test("rock should won against scissors", async ({ browser }) => {
    const page = await browser.newPage()
    const page1 = await browser.newPage()

    await page.goto(projectUrl)
    await page1.goto(projectUrl)

    await page.getByRole("img", { name: "rock icons" }).click()
    await page1.getByRole("img", { name: "scissors icons" }).click()

    const main = page.locator("main")
    const main1 = page1.locator("main")

    await expect(main).toContainText("You win !")
    await expect(main1).toContainText("You lose...")
  })

  test("paper should lose against scissors", async ({ browser }) => {
    const page = await browser.newPage()
    const page1 = await browser.newPage()

    await page.goto(projectUrl)
    await page1.goto(projectUrl)

    await page.getByRole("img", { name: "paper icons" }).click()
    await page1.getByRole("img", { name: "scissors icons" }).click()

    const main = page.locator("main")
    const main1 = page1.locator("main")

    await expect(main).toContainText("You lose...")
    await expect(main1).toContainText("You win !")
  })

  test("rock against rock should tie", async ({ browser }) => {
    const page = await browser.newPage()
    const page1 = await browser.newPage()

    await page.goto(projectUrl)
    await page1.goto(projectUrl)

    await page.getByRole("img", { name: "rock icons" }).click()
    await page1.getByRole("img", { name: "rock icons" }).click()

    const main = page.locator("main")
    const main1 = page1.locator("main")

    await expect(main).toContainText(["It's a tie"])
    await expect(main1).toContainText("It's a tie")
  })
})
