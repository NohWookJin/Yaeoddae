import { test, expect } from "@playwright/test";

const login = async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("path:nth-child(2)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("test@test.com");
  await page.getByPlaceholder("비밀번호를 입력해주세요").click();
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("test");
  await page.getByRole("button", { name: "로그인" }).click();
};

test("예약 확인", async ({ page }) => {
  login({ page });
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴$/ })
    .locator("div")
    .click();
  await page.locator(".sc-gIntVs > div:nth-child(2) > button:nth-child(2)").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^카드휴대폰실시간계좌이체$/ })
    .locator("div")
    .first()
    .click();
  await page.getByRole("button", { name: "원 결제하기" }).click();
  setTimeout(async () => {
    await page.goto("http://localhost:5173/reservation-history");
  }, 10000);

  const expectData = {
    paymentType: page.getByText("결제 수단: 카카오페이").first(),
    price: page.getByText("결제 금액: 110,000원").first(),
  };

  await expect(expectData.paymentType).toContainText("카카오페이");
  await expect(expectData.price).toContainText("110,000원");
});
