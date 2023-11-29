import { test, expect } from "@playwright/test";

test("검색 페이지 이용하기", async ({ page }) => {
  await page.locator("body").click();
  await page.goto("http://localhost:5173/search");
  await page.getByPlaceholder("숙소명을 입력하세요").click();
  await page.getByPlaceholder("숙소명을 입력하세요").fill("플로팅웨일 설악도적폭포스테이");
  await page.getByPlaceholder("숙소명을 입력하세요").press("Enter");
  await page.getByText("플로팅웨일 설악도적폭포스테이").click();
  await page.getByRole("heading", { name: "플로팅웨일 설악도적폭포스테이" }).click();

  const title = page.getByRole("heading", { name: "플로팅웨일 설악도적폭포스테이" });

  await expect(title).toContainText("플로팅웨일 설악도적폭포스테이");
});

test("검색 결과가 존재하지 않는 경우", async ({ page }) => {
  await page.goto("http://localhost:5173/search");
  await page.getByPlaceholder("숙소명을 입력하세요").click();
  await page.getByPlaceholder("숙소명을 입력하세요").fill("asdfasdfasdf");
  await page.getByPlaceholder("숙소명을 입력하세요").press("Enter");
  await page.getByText("검색 결과가 없습니다").click();

  const noResult = page.getByText("검색 결과가 없습니다");

  await expect(noResult).toContainText("검색 결과가 없습니다");
});
