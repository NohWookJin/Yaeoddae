import { test, expect } from "@playwright/test";

test("Open main page and verify title", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle("YA어때!");
});

test("Verify logo is visible", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const logo = page.locator(".sc-gyUexO");
  await expect(logo).toBeVisible();
});

test("Verify categoryTab is visible", async ({ page }) => {
  const expectedCategory = ["서울", "경기", "강원", "부산"];
  await page.goto("http://localhost:5173/");
  const categoryTab = page.locator(".sc-jrAGKZ.gteEvR div");

  await expect(categoryTab.first()).toBeVisible();
  expect(await categoryTab.allInnerTexts()).toEqual(expectedCategory);
});

test("categoryTab", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByText("서울").click();
  await page.getByText("경기").click();
  await page.getByText("강원", { exact: true }).click();
  await page.getByText("부산").first().click();
});

test("Beloved", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("heading", { name: "제주도" }).click();
  await page.goto("http://localhost:5173/");
  await page.getByRole("heading", { name: "부산" }).click();
  await page.goto("http://localhost:5173/");
  await page.getByRole("heading", { name: "강원도" }).click();
});

test("cityItem", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴$/ })
    .locator("div")
    .click();
  await page.locator("#arrowLeft").click();
});

test("searchBar", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("어디로 갈까요?").dblclick();
  await page.getByPlaceholder("어디로 갈까요?").fill("브라운스위트");
});
