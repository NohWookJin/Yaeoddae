// style
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import noResult from "../../assets/icons/noResult.svg";

function DetailNoPage() {
  const navigate = useNavigate();

  return (
    <>
      <TopContainer>
        <StyledImg src={noResult} alt="" />
        <div>정보를 제공하지 않는 호텔이에요</div>
      </TopContainer>
      <BottomContainer>
        <SectionBottom>
          <button onClick={() => navigate("/")}>홈 이동</button>
        </SectionBottom>
      </BottomContainer>
    </>
  );
}

export default DetailNoPage;

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    ${({ theme }) => `
    font-size: ${theme.Fs.default}
  `}
  }
`;

const StyledImg = styled.img`
  width: 300px;
  height: 100px;
  margin-top: 17rem;
  margin-bottom: 30px;
`;

const BottomContainer = styled.div`
  min-width: 375px;
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;

  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => `
  border: ${theme.Border.thinBorder};
  background-color: ${theme.Color.componentColor}
`}
`;

const SectionBottom = styled.div`
  button {
    text-align: center;
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.Color.mainColor};
    color: ${({ theme }) => theme.Color.componentColor};
    font-size: ${({ theme }) => theme.Fs.default};
    font-weight: 600;
    border-radius: ${({ theme }) => theme.Br.default};
    &:hover {
      transition: all 0.3s;
      background-color: ${({ theme }) => theme.Color.hoverColor};
    }
  }
`;
