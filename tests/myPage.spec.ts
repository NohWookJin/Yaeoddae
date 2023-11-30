import { test, expect } from "@playwright/test";

test("마이페이지 수정 및 로그아웃", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  // await page.waitForSelector(".sc-iGctyi", { state: "visible" });
  await page.locator("path:nth-child(2)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("leejin7900@gmail.com");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("12345");
  await page.getByRole("button", { name: "로그인" }).click();
  await page.locator("path:nth-child(2)").click();
  await page.getByText("내 정보 관리").click();
  await page.getByRole("button", { name: "수정" }).click();
  await page.getByPlaceholder("예약자 이름").click();
  await page.getByPlaceholder("예약자 이름").fill("이w");
  await page.getByPlaceholder("예약자 이름").press("CapsLock");
  await page.getByPlaceholder("예약자 이름").fill("");
  await page.getByPlaceholder("예약자 이름").press("CapsLock");
  await page.getByPlaceholder("예약자 이름").fill("욱진이");
  await page.getByRole("button", { name: "저장" }).click();
  await page.getByRole("button", { name: "로그아웃" }).click();

  const logoutButton = page.getByRole("button", { name: "로그아웃" });

  await expect(logoutButton).toHaveText("로그아웃");
});
