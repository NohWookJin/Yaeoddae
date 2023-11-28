import { useState, useEffect } from "react";
import styled from "styled-components";

function MyPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

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
        const userData = await response.json();
        setUserEmail(userData.email);
        setUserName(userData.name);
        setUserPhone(userData.phone);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <MypageWrap>
      <ProfileFix>
        <a>내 정보 수정 {">"}</a>
      </ProfileFix>
      <InputWrap>
        <span>이메일</span>
        <input placeholder="유저 이메일" value={userEmail} readOnly />
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
        <a>예약 내역 확인 {">"}</a>
      </ProfileFix>
      <BottomMenu>
        <button>로그아웃</button>
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
  padding: 30px 0;
  a {
    font-weight: bold;
  }
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 26px;
`;

const SpanWrap = styled.div`
  margin: 26px 0;
  display: flex;
  justify-content: left;
  span:nth-child(2) {
    margin-left: 20px;
    margin-bottom: 30px;
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

const BottomMenu = styled.div`
  background-color: ${(props) => props.theme.Color.mutedFontColor};
`;
