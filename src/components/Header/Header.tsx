// library
import { useState } from "react";
import styled, { css } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

// component
import Sidebar from "./Sidebar";

// logo
import HeaderLogo from "../../assets/logo/headerLogo.svg?react";

// icon
import List from "../../assets/icons/list.svg?react";
import Cart from "../../assets/icons/cart.svg?react";
import ArrowLeft from "../../assets/icons/arrowLeft.svg?react";

function Header() {
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleListClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleArrowLeftClick = () => {
    navigate(-1);
  };

  switch (currentPath.split("/")[1]) {
    case "":
    case "search":
      return (
        <>
          <HeaderLayout>
            <ListBtn onClick={handleListClick} />
            <HeaderLogoBtn onClick={handleTitleClick} />
            <CartBtn onClick={handleCartClick} />
          </HeaderLayout>
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </>
      );

    case "detail":
      return (
        <HeaderLayout $isBorderBottom>
          <ArrowLeftBtn id="arrowLeft" onClick={handleArrowLeftClick} />
          <HeaderLogoBtn onClick={handleTitleClick} />
          <CartBtn onClick={handleCartClick} />
        </HeaderLayout>
      );

    case "cart":
      return (
        <HeaderLayout $isBorderBottom>
          <HeaderLeftBox>
            <ArrowLeftBtn id="arrowLeft" onClick={handleArrowLeftClick} />
            <HeaderTitle>장바구니</HeaderTitle>
          </HeaderLeftBox>
        </HeaderLayout>
      );

    case "room":
      return (
        <HeaderLayout $isBorderBottom>
          <HeaderLeftBox>
            <ArrowLeftBtn id="arrowLeft" onClick={handleArrowLeftClick} />
            <HeaderTitle>객실상세</HeaderTitle>
          </HeaderLeftBox>
        </HeaderLayout>
      );

    case "mypage":
      return (
        <HeaderLayout $isBorderBottom>
          <HeaderLeftBox>
            <ArrowLeftBtn id="arrowLeft" onClick={handleArrowLeftClick} />
            <HeaderTitle>내 정보 관리</HeaderTitle>
          </HeaderLeftBox>
        </HeaderLayout>
      );

    case "reservation":
      return (
        <HeaderLayout $isBorderBottom>
          <HeaderLeftBox>
            <ArrowLeftBtn id="arrowLeft" onClick={handleArrowLeftClick} />
            <HeaderTitle>예약</HeaderTitle>
          </HeaderLeftBox>
        </HeaderLayout>
      );

    case "reservation-history":
      return (
        <HeaderLayout $isBorderBottom>
          <HeaderLeftBox>
            <ArrowLeftBtn id="arrowLeft" onClick={handleArrowLeftClick} />
            <HeaderTitle>예약 내역 조회</HeaderTitle>
          </HeaderLeftBox>
        </HeaderLayout>
      );
  }
}

export default Header;

const HeaderLayout = styled.div<{ $isBorderBottom?: boolean; $isLoginPage?: boolean }>`
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: ${({ theme }) => theme.Color.componentColor};

  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isLoginPage ? "center" : "space-between")};

  width: 100%;

  padding: ${({ theme }) => theme.Padding.header};

  ${(props) =>
    props.$isBorderBottom &&
    css`
      border-bottom: ${(innerProps) => innerProps.theme.Border.thinBorder};
    `}
`;

const HeaderLeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

type BtnProps = {
  onClick: () => void;
  id?: string;
};

const HeaderLogoSVG = styled(HeaderLogo)`
  fill: ${({ theme }) => theme.Color.mainColor};
  margin: 0 0 0 0.25rem;
`;

const HeaderLogoBtn = ({ onClick }: BtnProps) => {
  return (
    <button onClick={onClick}>
      <HeaderLogoSVG />
    </button>
  );
};

const ArrowLeftSVG = styled(ArrowLeft)``;

const ArrowLeftBtn = ({ onClick, id }: BtnProps) => {
  return (
    <button id={id} onClick={onClick}>
      <ArrowLeftSVG />
    </button>
  );
};

const ListSVG = styled(List)``;

const ListBtn = ({ onClick }: BtnProps) => {
  return (
    <button onClick={onClick}>
      <ListSVG />
    </button>
  );
};

const CartSVG = styled(Cart)``;

const CartBtn = ({ onClick }: BtnProps) => {
  return (
    <button onClick={onClick}>
      <CartSVG />
    </button>
  );
};

const HeaderTitle = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.Fs.tagTitle};
`;
