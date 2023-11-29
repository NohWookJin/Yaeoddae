import { useState, useEffect } from "react";
import styled from "styled-components";
import useUserStore from "../../components/Store/UserStore";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const setStoreUserEmail = useUserStore((state) => state.setUserEmail);
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await fetch("https://travel-server.up.railway.app/members/mypage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        const { email, name, phone } = responseData.data;
        setUserEmail(email);
        setStoreUserEmail(email);
        setUserName(name);
        setUserPhone(phone);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserEmail("");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <MypageWrap>
      <ProfileFix>
        <p>내 정보 수정 {">"}</p>
      </ProfileFix>
      <InputWrap>
        <span>이메일</span>
        <input placeholder="유저 이메일" value={userEmail} />
        <button>수정</button>
      </InputWrap>
      <SpanWrap>
        <span>예약자 이름</span>
        <span>{userName || "Test"}</span>
      </SpanWrap>
      <SpanWrap>
        <span>휴대폰 번호</span>
        <span>{userPhone || "010-1234-5678"}</span>
      </SpanWrap>
      <TextWrap>
        <p>
          개인 정보 보호를 위해 내 정보는 모두 안전하게 암호화됩니다.
          <br />
          개인 정보 변경은 YA어때 앱에서만 가능합니다.
        </p>
        <hr />
      </TextWrap>
      <ProfileFix>
        <p>예약 내역 확인 {">"}</p>
      </ProfileFix>
      <CheckForm></CheckForm>
      <BottomMenu>
        <button onClick={handleLogout}>로그아웃</button>
        <button>회원탈퇴</button>
      </BottomMenu>
    </MypageWrap>
  );
}

export default MyPage;

const MypageWrap = styled.div`
  padding: 14px;
`;

const ProfileFix = styled.div`
  padding: 20px 0;
  p {
    font-weight: bold;
  }
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  input {
    border: ${(props) => props.theme.Border.thickBorder};
    border-radius: ${(props) => props.theme.Br.default};
    padding: 0 10px;
    &:hover {
      border-color: ${(props) => props.theme.Color.hoverColor};
    }
    &:focus {
      border-color: ${(props) => props.theme.Color.activeColor};
    }
  }
  button {
    border: ${(props) => props.theme.Border.thickBorder};
    border-radius: 8px;
    padding: 4px;
    &:hover {
      background-color: ${(props) => props.theme.Color.hoverColor};
      color: ${(props) => props.theme.Color.componentColor};
    }
  }
`;

const SpanWrap = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: left;
  span:nth-child(2) {
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

const TextWrap = styled.div`
  p {
    font-size: ${(props) => props.theme.Fs.caption};
    color: ${(props) => props.theme.Color.mutedFontColor};
  }

  hr {
    margin: 10px 0;
    background-color: ${(props) => props.theme.Color.mutedFontColor};
    height: 5px;
    border: 0;
  }
`;

const CheckForm = styled.div`
  height: 56vh;
`;

const BottomMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  background-color: ${(props) => props.theme.Color.mutedFontColor};
  button {
    padding: 0 6px;
    height: 25px;
    font-size: ${(props) => props.theme.Fs.default};
  }
  button:first-child {
    border-radius: ${(props) => props.theme.Br.default};
    background-color: ${(props) => props.theme.Color.mainColor};
    color: ${(props) => props.theme.Color.componentColor};
    &:hover {
      background-color: ${(props) => props.theme.Color.hoverColor};
    }
  }
`;
