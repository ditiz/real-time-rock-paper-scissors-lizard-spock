import { routes } from "@/utils/navigation"
import { expect, test } from "@playwright/test"

const projectUrl = "http://localhost:3000"
const closeSocketUrl = "http://localhost:3000/api/socket/close"

test.describe("advanced game", () => {
  const advancedGameUrl = projectUrl + routes.advanced

  test.afterEach(async ({ page }) => {
    // Close socket
    await page.goto(closeSocketUrl)
  })

  test("header", async ({ page }) => {
    await page.goto(advancedGameUrl)

    const title = await page.innerText("h1")

    expect(title).toBe("Rock Paper Scissors Lizard Spock")
  })

  test("title", async ({ page }) => {
    await page.goto(advancedGameUrl)

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Rock Paper Scissor Lizard Spock/)
  })

  test("waiting message", async ({ page }) => {
    await page.goto(advancedGameUrl)
    const main = page.locator("main")
    await expect(main).toContainText("Waiting for another player")
  })

  test("game icons when 2 player are connected", async ({ browser }) => {
    const page = await browser.newPage()
    const page1 = await browser.newPage()

    await page.goto(advancedGameUrl)
    await page1.goto(advancedGameUrl)

    expect(page.getByRole("img", { name: "rock icon" })).toBeTruthy()
    expect(page.getByRole("img", { name: "paper icon" })).toBeTruthy()
    expect(page.getByRole("img", { name: "scissors icon" })).toBeTruthy()
    expect(page.getByRole("img", { name: "lizard icon" })).toBeTruthy()
    expect(page.getByRole("img", { name: "spock icon" })).toBeTruthy()
  })

  test("rock should won against scissors", async ({ browser }) => {
    const page = await browser.newPage()
    const page1 = await browser.newPage()

    await page.goto(advancedGameUrl)
    await page1.goto(advancedGameUrl)

    await page.getByRole("img", { name: "rock icon" }).click()
    await page1.getByRole("img", { name: "scissors icon" }).click()

    const main = page.locator("main")
    const main1 = page1.locator("main")

    await expect(main).toContainText("You win !")
    await expect(main1).toContainText("You lose...")
  })

  test("paper should lose against scissors", async ({ browser }) => {
    const page = await browser.newPage()
    const page1 = await browser.newPage()

    await page.goto(advancedGameUrl)
    await page1.goto(advancedGameUrl)

    await page.getByRole("img", { name: "paper icon" }).click()
    await page1.getByRole("img", { name: "scissors icon" }).click()

    const main = page.locator("main")
    const main1 = page1.locator("main")

    await expect(main).toContainText("You lose...")
    await expect(main1).toContainText("You win !")
  })

  test("rock against rock should tie", async ({ browser }) => {
    const page = await browser.newPage()
    const page1 = await browser.newPage()

    await page.goto(advancedGameUrl)
    await page1.goto(advancedGameUrl)

    await page.getByRole("img", { name: "rock icon" }).click()
    await page1.getByRole("img", { name: "rock icon" }).click()

    const main = page.locator("main")
    const main1 = page1.locator("main")

    await expect(main).toContainText(["It's a tie"])
    await expect(main1).toContainText("It's a tie")
  })
})
