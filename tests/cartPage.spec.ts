import { test, expect } from "@playwright/test";

test("기존 장바구니 상품 확인", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator(".sc-iIEYgE").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("test4@gmail.com");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("12345");
  await page.getByPlaceholder("비밀번호를 입력해주세요").press("Enter");
  await page.locator(".sc-gsBpUr").click();

  const result = page.getByRole("heading", { name: "디럭스 더블" }).first();

  await expect(result).toContainText("디럭스 더블");
});
