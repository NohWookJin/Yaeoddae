import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../../assets/logo/headerLogo.svg?react";
import JoinModal from "../../components/JoinModal";
import Input from "../../components/Input";

function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <SignupContainer>
      <LogoWrap onClick={navigateToHome}>
        <HeaderLogoSVG />
      </LogoWrap>
      <h4>회원가입</h4>
      <form action="#" method="post">
        <InputWrap>
          <Input
            isRequired={true}
            label={"이메일"}
            placeholder={"이메일을 입력해주세요."}
            type={"text"}
          />

          <Input
            isRequired={true}
            label={"비밀번호"}
            placeholder={"비밀번호를 입력해주세요."}
            type={"password"}
          />

          <Input
            isRequired={true}
            label={"비밀번호 확인"}
            placeholder={"비밀번호를 한번더 입력해주세요."}
            type={"password"}
          />

          <Input
            isRequired={true}
            label={"휴대폰 번호"}
            placeholder={"휴대폰 번호 입력해주세요."}
            type={"number"}
          />
        </InputWrap>
        <button type="button" onClick={toggleModal}>
          회원가입
        </button>
        {isModalOpen && <JoinModal />}
      </form>
    </SignupContainer>
  );
}

export default SignupPage;

const SignupContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: ${(props) => props.theme.Br.default};
  text-align: center;

  h2 {
    color: ${(props) => props.theme.Color.mainColor};
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.4rem;
  }

  h4 {
    display: flex;
    color: ${(props) => props.theme.Color.mainColor};
    font-weight: bold;
    margin-bottom: 16px;
  }

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
`;
