import { test, expect } from "@playwright/test";

test("회원가입 페이지 정상가입", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("path:nth-child(3)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByRole("link", { name: "회원가입" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("iphone19@gmail.com");
  await page.getByPlaceholder("이름을 입력해주세요").click();
  await page.getByPlaceholder("이름을 입력해주세요").press("CapsLock");
  await page.getByPlaceholder("이름을 입력해주세요").fill("아이폰19");
  await page.getByPlaceholder("비밀번호를 입력해주세요").click();
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("12345");
  await page.getByPlaceholder("휴대폰 번호를 '-' 없이 입력해주세요").click();
  await page.getByPlaceholder("휴대폰 번호를 '-' 없이 입력해주세요").fill("01012345678");
  await page.getByRole("button", { name: "회원가입" }).click();
  await page.getByText("전체 동의").click();
  await page.getByRole("button", { name: "동의하고 계속하기" }).click();

  const confirm = page.getByRole("button", { name: "동의하고 계속하기" });

  await expect(confirm).toContainText("동의하고 계속하기");
});

test("회원가입 페이지 비정상가입_이메일양식오류", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("path:nth-child(3)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByRole("link", { name: "회원가입" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").press("CapsLock");
  await page.getByPlaceholder("이메일을 입력해주세요").fill("iphone18");
  await page.getByPlaceholder("이름을 입력해주세요").click();
  await page.getByPlaceholder("이름을 입력해주세요").press("CapsLock");
  await page.getByPlaceholder("이름을 입력해주세요").fill("아이폰18");
  await page.getByPlaceholder("비밀번호를 입력해주세요").click();
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("12345");
  await page.getByPlaceholder("휴대폰 번호를 '-' 없이 입력해주세요").click();
  await page.getByPlaceholder("휴대폰 번호를 '-' 없이 입력해주세요").fill("0101111-2222");
  await page.getByRole("button", { name: "회원가입" }).click();
  await page.getByText("전체 동의").click();
  await page.getByRole("button", { name: "동의하고 계속하기" }).click();
  await page.getByText("이메일 양식이 올바르지 않습니다").click();

  const emailWrong = page.getByText("이메일 양식이 올바르지 않습니다");

  await expect(emailWrong).toContainText("이메일 양식이 올바르지 않습니다");
});

test("회원가입 페이지 비정상가입_휴대폰번호 하이픈 양식오류", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  // await page.waitForSelector(".sc-iGctyi", { state: "visible" });
  await page.locator("path:nth-child(2)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByRole("link", { name: "회원가입" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("");
  await page.getByPlaceholder("이메일을 입력해주세요").fill("leejin7900@gmail.com");
  await page.getByPlaceholder("이메일을 입력해주세요").press("Tab");
  await page.getByPlaceholder("이름을 입력해주세요").press("CapsLock");
  await page.getByPlaceholder("이름을 입력해주세요").fill("이진욱");
  await page.getByPlaceholder("이름을 입력해주세요").press("Tab");
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("12345");
  await page.getByPlaceholder("휴대폰 번호를 '-' 없이 입력해주세요").click();
  await page.getByPlaceholder("휴대폰 번호를 '-' 없이 입력해주세요").fill("010-1222-2333");
  await page.getByRole("button", { name: "회원가입" }).click();
  await page.getByLabel("전체 동의").check();
  await page.getByRole("button", { name: "동의하고 계속하기" }).click();
  await page.getByText("휴대폰 번호에 '-' 기호를 포함하지 마세요").click();

  const phoneNumberWrong = page.locator("text=휴대폰 번호에 '-' 기호를 포함하지 마세요.");
  await expect(phoneNumberWrong).toHaveText("휴대폰 번호에 '-' 기호를 포함하지 마세요.");
});
