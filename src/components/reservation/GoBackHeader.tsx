import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import goBackIcon from "../../assets/goBackIcon.svg";

function GoBackHeader({ pageTitle }: { pageTitle: string }) {
  const navigate = useNavigate();
  return (
    <Header>
      <button onClick={() => navigate(-1)}>
        <img src={goBackIcon} alt="뒤로 가기" title="뒤로 가기" />
      </button>
      <h1>{pageTitle}</h1>
    </Header>
  );
}

export default GoBackHeader;

const Header = styled.header`
  width: 375px;
  display: flex;
  padding-left: 16px;
  align-items: center;
  gap: 10px;
  height: 44px;
  position: fixed;
  
  background-color: ${(props) => props.theme.Color.background};

  h1 {
    color: ${(props) => props.theme.Color.mainFontColor};
    font-weight: 600;
  }
`;
