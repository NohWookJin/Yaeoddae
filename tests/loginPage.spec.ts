import { test, expect } from "@playwright/test";

test("회원가입 중복 체크 테스트", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("path:nth-child(2)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByRole("link", { name: "회원가입" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("leeyuwk54@gmail.com");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("이름을 입력해주세요").fill("이영욱");
  await page.getByPlaceholder("이름을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("dlduddnr1!");
  await page.getByPlaceholder("비밀번호를 입력해주세요").press("Tab");
  await page.getByPlaceholder("휴대폰 번호를 '-' 없이 입력해주세요").fill("01012345678");
  await page.getByRole("button", { name: "회원가입" }).click();
  await page.getByLabel("전체 동의").check();
  await page.getByRole("button", { name: "동의하고 계속하기" }).click();

  const signupFailAlert = page.getByText("회원가입 실패");

  await expect(signupFailAlert).toContainText("회원가입 실패");
});

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
  await page.locator("path:nth-child(2)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("failtest");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("failtest");
  await page.getByRole("button", { name: "로그인" }).click();

  const loginFailAlert = page.getByText("로그인 실패");

  await expect(loginFailAlert).toContainText("로그인 실패");
});
