export const CAUTIONS_LIST = [
  {
    title: "현장결제",
    content: "추가인원 비용등의 현장 결제 발생 상품을 확인하세요.",
  },
  {
    title: "취소불가 및 수수료",
    content: "취소 및 환불규정에 따라 취소불가, 수수료가 발생 할 수 있습니다.",
  },
  {
    title: "미성년자 및 법정대리인 필수",
    content: "미성년자는 법정대리인 동행 없이 투숙이 불가능합니다.",
  },
];

import kakaopayIcon from "../../assets/icons/kakaopay.png";
export const PAYMENT_OPTIONS = [
  {
    name: "kakaopay",
    children: <img src={kakaopayIcon} alt="카카오페이" />,
  },
  {
    name: "card",
    children: <span>카드</span>,
  },
  {
    name: "phone",
    children: <span>휴대폰</span>,
  },
  {
    name: "realtime-bank-transfer",
    children: <span>실시간계좌이체</span>,
  },
];
