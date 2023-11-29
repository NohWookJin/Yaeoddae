import { test, expect } from "@playwright/test";

test("로그인 성공 테스트", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("path:nth-child(2)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("leeyuwk54@gmail.com");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("dlduddnr1!");
  await page.getByRole("button", { name: "로그인" }).click();
  await page.locator("path:nth-child(2)").click();

  const loginTitle = page.getByText("leeyuwk54@gmail.com");

  await expect(loginTitle).toContainText("leeyuwk54@gmail.com");
});

test("로그인 실패 테스트", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator(".sc-flMqbI").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("failtest");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("failtest");
  await page.getByRole("button", { name: "로그인" }).click();

  const loginFailAlert = page.getByText("로그인 실패");

  await expect(loginFailAlert).toContainText("로그인 실패");
});
