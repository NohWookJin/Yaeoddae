import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../../assets/logo/headerLogo.svg?react";
import JoinModal from "../../components/JoinModal";
import Input from "../../components/Input";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../../components/Store/UserStore";

function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setUserEmail, setIsLoggedIn } = useUserStore();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const requestData = {
    email,
    name,
    password,
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      toast.error("이메일 양식이 올바르지 않습니다.");
      return;
    }

    if (phoneNumber.includes("-")) {
      toast.error("휴대폰 번호에 '-' 기호를 포함하지 마세요.");
      return;
    }

    try {
      const response = await fetch("https://travel-server.up.railway.app/members/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log("회원가입 성공");
        setUserEmail(email);
        setIsLoggedIn(true);
        navigate("/login");
      } else {
        toast.error("회원가입 실패");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <SignupContainer>
      <LogoWrap onClick={navigateToHome}>
        <HeaderLogoSVG />
      </LogoWrap>
      <h4>회원가입</h4>
      <form onSubmit={handleSignup}>
        <InputWrap>
          <Input
            isRequired={true}
            label={"이메일"}
            placeholder={"이메일을 입력해주세요."}
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            isRequired={true}
            label={"이름"}
            placeholder={"이름을 입력해주세요."}
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            isRequired={true}
            label={"비밀번호"}
            placeholder={"비밀번호를 입력해주세요."}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            isRequired={true}
            label={"휴대폰 번호"}
            placeholder={"휴대폰 번호를 '-' 없이 입력해주세요."}
            type={"text"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputWrap>
        <button type="button" onClick={toggleModal}>
          회원가입
        </button>
        {isModalOpen && <JoinModal />}
        <CustomToastContainer />
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

const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast-body {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .Toastify__close-button {
    height: auto;
    width: auto;
    min-width: auto;
    padding: 2px;
  }

  .Toastify__toast {
    min-height: auto;
    padding: 10px;
    font-size: 14px;
  }
`;
