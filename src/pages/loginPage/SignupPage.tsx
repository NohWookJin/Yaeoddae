import styled from "styled-components";
import JoinModal from "../../components/JoinModal";

function SignupPage() {
  return (
    <SignupContainer>
      <h2>YA어때!</h2>
      <h4>회원가입</h4>
      <form action="/submit-your-login-form" method="post">
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
        <InputWrap>
          <span>
            비밀번호 확인 <strong>*</strong>
          </span>
          <input
            type="password"
            name="passwordCheck"
            placeholder="비밀번호를 한번더 입력해주세요."
          />
        </InputWrap>
        <InputWrap>
          <span>
            휴대폰 번호 <strong>*</strong>
          </span>
          <input type="text" name="phoneNumber" placeholder="휴대폰 번호를 입력해주세요." />
        </InputWrap>
        <button type="submit">회원가입 완료</button>
        <JoinModal />
      </form>
    </SignupContainer>
  );
}

export default SignupPage;

const SignupContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: ${(props) => props.theme.Br.default};
  box-shadow: ${(props) => props.theme.Bs.default};
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
