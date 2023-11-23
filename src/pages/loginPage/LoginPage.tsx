import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../../../public/assets/logo/headerLogo.svg?react";

function LoginPage() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <LoginContainer>
      <LogoWrap onClick={navigateToHome}>
        <HeaderLogoSVG />
      </LogoWrap>
      <form action="#" method="post">
        <InputWrap>
          <span>
            이메일 <strong>*</strong>
          </span>
          <input type="text" name="email" placeholder="이메일을 입력해주세요." />
        </InputWrap>
        <InputWrap>
          <span>
            비밀번호 <strong>*</strong>
          </span>
          <input type="password" name="password" placeholder="비밀번호를 입력해주세요." />
        </InputWrap>
        <button type="submit">로그인</button>
        <a href="./Signup">회원가입</a>
      </form>
    </LoginContainer>
  );
}

export default LoginPage;

const LoginContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: ${(props) => props.theme.Br.default};
  text-align: center;

  button {
    width: 100%;
    background-color: ${(props) => props.theme.Color.mainColor};
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: ${(props) => props.theme.Br.default};
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.Color.hoverColor};
    }
    &:active {
      background-color: ${(props) => props.theme.Color.activeColor};
    }
  }

  a {
    font-size: ${(props) => props.theme.Fs.default};
  }
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderLogoSVG = styled(HeaderLogo)`
  cursor: pointer;
  fill: ${(props) => props.theme.Color.mainColor};
  margin-bottom: 20px;
  font-size: 1.4rem;
`;

const InputWrap = styled.div`
  margin-bottom: 10px;

  input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    display: inline-block;
    border: ${(props) => props.theme.Border.thinBorder};
    border-radius: 6px;
    box-sizing: border-box;
  }

  input:focus {
    outline: 2px solid ${(props) => props.theme.Color.activeColor};
  }

  input::placeholder {
    color: ${(props) => props.theme.Color.defaultFontColor};
    opacity: 0.4;
  }

  span {
    display: flex;
    font-size: ${(props) => props.theme.Fs.default};
  }

  strong {
    color: ${(props) => props.theme.Color.mainColor};
    margin-left: 1px;
  }
`;
