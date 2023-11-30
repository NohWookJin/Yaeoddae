import { test, expect } from "@playwright/test";

const login = async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");
  await page.locator("path:nth-child(2)").click();
  await page.getByRole("button", { name: "로그인" }).click();
  await page.getByPlaceholder("이메일을 입력해주세요").click();
  await page.getByPlaceholder("이메일을 입력해주세요").fill("test@test.com");
  await page.getByPlaceholder("비밀번호를 입력해주세요").click();
  await page.getByPlaceholder("비밀번호를 입력해주세요").fill("test");
  await page.getByRole("button", { name: "로그인" }).click();
};

test("장바구니 상품 예약 시 예약페이지 내 상품 확인", async ({ page }) => {
  login({ page });
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴$/ })
    .locator("div")
    .click();
  await page.goto(
    "http://127.0.0.1:5173/detail/3023167?keyword=%EB%B8%8C%EB%9D%BC%EC%9A%B4%EC%8A%A4%EC%9C%84%ED%8A%B8%20%EC%8B%A0%EC%B4%8C%EC%84%BC%ED%8A%B8%EB%9F%B4&area-code=SEOUL&checkIn=231201&checkOut=231202&memberCount=2"
  );
  await page.getByRole("button", { name: "증가" }).click();
  await page.locator(".cartButton").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^브라운스위트 신촌센트럴서울특별시 마포구 서강로 137 \(노고산동\)$/ })
    .getByRole("checkbox")
    .check();
  await page.getByRole("button", { name: "예약하기" }).click();

  const expectData = {
    accommodationName: page.getByRole("heading", { name: "브라운스위트 신촌센트럴" }),
    roomName: page.getByRole("heading", { name: "디럭스 트리플" }),
    guestNumber: page.getByText("기준 3명 / 최대 3명"),
  };

  await expect(expectData.accommodationName).toContainText("브라운스위트 신촌센트럴");
  await expect(expectData.roomName).toContainText("디럭스 트리플");
  await expect(expectData.guestNumber).toContainText("기준 3명");
});

test("단건 예약 확인", async ({ page }) => {
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
  await page.goto("http://127.0.0.1:5173/reservation-history");

  const expectData = {
    paymentType: page.getByText("예약 일자: 2023.11.30(목)결제 수단: 카카오페이"),
    price: page.getByText("결제 금액: 110,000원"),
  };

  await expect(expectData.paymentType).toContainText("카카오페이");
  await expect(expectData.price).toContainText("110,000원");
});
