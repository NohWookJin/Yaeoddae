import { test, expect } from "@playwright/test";

test("사용자 체크인 체크아웃 날짜 변경 검증", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴$/ })
    .locator("div")
    .click();
  await page.getByRole("button", { name: "변경" }).click();
  await page.getByRole("button", { name: "›" }).click();
  await page.getByRole("button", { name: "년 12월 1일" }).click();
  await page.getByRole("button", { name: "년 12월 5일" }).click();
  await page.getByText("선택하기").click();

  const result = page.getByText("날짜 및 인원 선택12월 01일 ~ 12월 05일·");
  await expect(result).toContainText("날짜 및 인원 선택12월 01일 ~ 12월 05일·");
});

test("사용자 인원수 이용 검증", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴$/ })
    .locator("div")
    .click();
  await page.getByRole("button", { name: "증가" }).click();
  await page.getByRole("button", { name: "증가" }).click();
  await page.getByText("증가감소").click();

  const result = page.getByText("3명");

  await expect(result).toContainText("3명");
});

test("장바구니 이용전 로그인 및 장바구니 이동 검증", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴$/ })
    .locator("div")
    .click();
  await page
    .locator("section:nth-child(2) > .sc-ctaXUJ > .sc-gIntVs > div:nth-child(2) > .cartButton")
    .click();
  await page.locator(".cartButton").first().click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("");
  await page.getByPlaceholder("이메일을 입력해주세요").press("CapsLock");
  await page.getByPlaceholder("이메일을 입력해주세요").fill("test4@gmail.com");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("12345");
  await page.getByPlaceholder("비밀번호를 입력해주세요").press("Enter");
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴$/ })
    .locator("div")
    .click();
  await page
    .locator("section:nth-child(2) > .sc-ctaXUJ > .sc-gIntVs > div:nth-child(2) > .cartButton")
    .click();
});

test("장바구니 이동 검증 및 상품 확인 검증", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator(".sc-iIEYgE").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("");
  await page.getByPlaceholder("이메일을 입력해주세요").press("CapsLock");
  await page.getByPlaceholder("이메일을 입력해주세요").fill("test4@gmail.com");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("12345");
  await page.getByPlaceholder("비밀번호를 입력해주세요").press("Enter");
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴$/ })
    .locator("div")
    .click();
  await page.locator(".cartButton").first().click();

  const result = page.getByText("브라운스위트 신촌센트럴");

  await expect(result).toContainText("브라운스위트 신촌센트럴");
});
