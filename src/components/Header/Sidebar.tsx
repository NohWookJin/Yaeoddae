// library
import styled, { css } from "styled-components";

// logo
import HeaderLogo from "../../../public/assets/logo/headerLogo.svg?react";

// Icon
import ArrowUp from "../../../public/assets/icons/arrowUp.svg?react";
import ArrowRight from "../../../public/assets/icons/arrowRight.svg?react";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ isOpen, setIsOpen }: Props) {
  const navigate = useNavigate();

  const handleBackGroundClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLoginBtnClick = () => {
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <SidebarLayout $isOpen={isOpen}>
      <SidebarTopBox>
        <SidebarTopBoxLogo>
          <ArrowUpSVG onClick={handleBackGroundClick} />
          <HeaderLogoSVG />
          <TransparentArrowUpSVG />
        </SidebarTopBoxLogo>
        <SidebarTopBoxText>로그인 후 예약하세요!</SidebarTopBoxText>
        <SidebarTopLogoutBtnBox onClick={handleLoginBtnClick}>
          로그인
          <ArrowRightSVG />
        </SidebarTopLogoutBtnBox>
      </SidebarTopBox>
      <SidebarBottomBox onClick={handleBackGroundClick} />
    </SidebarLayout>
  );
}

export default Sidebar;

const SidebarLayout = styled.div<{ $isOpen: boolean }>`
  transition: all 0.75s ease;

  position: fixed;
  top: -100%;
  ${(props) =>
    props.$isOpen &&
    css`
      top: 0;
    `}

  width: 375px;
  height: 100%;

  transform: translateX(-50%);
  left: 50%;
`;

const SidebarTopBox = styled.div`
  background-color: ${({ theme }) => theme.Color.mainColor};
  width: 100%;
  height: 13rem;

  padding: ${({ theme }) => theme.Padding.default};

  display: flex;
  flex-direction: column;
`;

const SidebarTopBoxLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowUpSVG = styled(ArrowUp)`
  cursor: pointer;
  fill: white;
`;

const TransparentArrowUpSVG = styled(ArrowUp)`
  fill: ${({ theme }) => theme.Color.mainColor};
`;

const HeaderLogoSVG = styled(HeaderLogo)`
  fill: white;
  margin: 0 0 0 0.25rem;
`;

const SidebarTopBoxText = styled.p`
  margin: 1rem 0 0 0;

  color: white;
  font-size: ${({ theme }) => theme.Fs.default};
  font-weight: 400;
  text-align: center;
`;

const SidebarTopLogoutBtnBox = styled.button`
  margin: 4rem 0 0 0;

  font-weight: 400;
  font-size: ${({ theme }) => theme.Fs.default};
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    > svg {
      transform: translateX(50%);
    }
  }
`;

const ArrowRightSVG = styled(ArrowRight)`
  transition: all 0.25s ease;

  fill: white;
`;

const SidebarBottomBox = styled.div`
  background-color: ${({ theme }) => theme.Color.borderColor};

  width: 100%;
  height: calc(100% - 13rem);
  opacity: 0.1;
`;
