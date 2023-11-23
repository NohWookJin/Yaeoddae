// library
import { useState } from "react";
import styled, { css } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

// component
import Sidebar from "./Sidebar";

// logo
import HeaderLogo from "../../../public/assets/logo/headerLogo.svg?react";

// icon
import List from "../../../public/assets/icons/list.svg?react";
import Cart from "../../../public/assets/icons/cart.svg?react";
import ArrowLeft from "../../../public/assets/icons/arrowLeft.svg?react";

function Header() {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
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
      return (
        <>
          <HeaderLayout>
            <ListSVG onClick={handleListClick} />
            <HeaderLogoSVG onClick={handleTitleClick} />
            <CartSVG onClick={handleCartClick} />
          </HeaderLayout>
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </>
      );

    // case "login":
    //   return (
    //     <HeaderLayout $isLoginPage>
    //       <HeaderLogoSVG onClick={handleTitleClick} />
    //     </HeaderLayout>
    //   );

    case "search":
      return (
        <>
          <HeaderLayout>
            <ListSVG onClick={handleListClick} />
            <HeaderLogoSVG onClick={handleTitleClick} />
            <CartSVG onClick={handleCartClick} />
          </HeaderLayout>
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </>
      );

    case "detail":
      return (
        <>
          <HeaderLayout>
            <ListSVG onClick={handleListClick} />
            <HeaderLogoSVG onClick={handleTitleClick} />
            <CartSVG onClick={handleCartClick} />
          </HeaderLayout>
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </>
      );

    case "cart":
      return (
        <HeaderLayout $isBorderBottom>
          <HeaderLeftBox>
            <ArrowLeftSVG id="arrowLeft" onClick={handleArrowLeftClick} />
            <HeaderTitle>장바구니</HeaderTitle>
          </HeaderLeftBox>
        </HeaderLayout>
      );

    case "mypage":
      return (
        <HeaderLayout>
          <HeaderLeftBox>
            <ArrowLeftSVG id="arrowLeft" onClick={handleArrowLeftClick} />
            <HeaderTitle>내 정보 관리</HeaderTitle>
          </HeaderLeftBox>
        </HeaderLayout>
      );

    case "reservation":
      return (
        <HeaderLayout>
          <HeaderLeftBox>
            <ArrowLeftSVG id="arrowLeft" onClick={handleArrowLeftClick} />
            <HeaderTitle>예약</HeaderTitle>
          </HeaderLeftBox>
        </HeaderLayout>
      );
  }
}

export default Header;

const HeaderLayout = styled.div<{ $isBorderBottom?: boolean; $isLoginPage?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isLoginPage ? "center" : "space-between")};

  width: 100%;
  height: 2.5rem;

  padding: ${(props) => props.theme.Padding.default};

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

const HeaderLogoSVG = styled(HeaderLogo)`
  cursor: pointer;
  fill: ${(props) => props.theme.Color.mainColor};
  margin: 0 0 0 0.25rem;
`;

const ArrowLeftSVG = styled(ArrowLeft)`
  cursor: pointer;
`;

const ListSVG = styled(List)`
  cursor: pointer;
`;

const CartSVG = styled(Cart)`
  cursor: pointer;
`;

const HeaderTitle = styled.p`
  font-weight: 700;
  font-size: ${(props) => props.theme.Fs.tagTitle};
`;
